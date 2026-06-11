import { useState, useEffect, useRef, useCallback } from "react";
import "./slideShow.css";


interface Photo {
  src: string;
  alt: string;
}

interface SlideShowProps {
  photos: Photo[];
  onClose: () => void;
  musicSrc?: string;
}

type KenBurnsDirection = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
const KB_DIRECTIONS: KenBurnsDirection[] = [
  "top-left", "top-right", "bottom-left", "bottom-right", "center",
];

const SLIDE_DURATION_MS  = 5000;
const FADE_DURATION_MS   = 1200;
const AUDIO_INITIAL_VOL  = 0.55; // volume normal da música

export default function SlideShow({ photos, onClose, musicSrc }: SlideShowProps): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [nextIndex, setNextIndex]       = useState<number | null>(null);
  const [fading, setFading]             = useState<boolean>(false);
  const [kbDir, setKbDir]               = useState<KenBurnsDirection>("top-left");
  const [nextKbDir, setNextKbDir]       = useState<KenBurnsDirection>("top-right");
  const [isPaused, setIsPaused]         = useState<boolean>(false);
  const [progress, setProgress]         = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef     = useRef<HTMLAudioElement>(null);
  const timerRef     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef  = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeOutRef   = useRef<ReturnType<typeof setInterval> | null>(null); // ← novo
  const progressVal  = useRef<number>(0);
  const isPausedRef  = useRef<boolean>(false);

  // ── Cancela fade out de áudio em andamento ─────────
  const clearAudioFadeOut = (): void => {
    if (fadeOutRef.current) {
      clearInterval(fadeOutRef.current);
      fadeOutRef.current = null;
    }
  };

  // ── Inicia fade out gradual do volume ──────────────
  // Reduz o volume de AUDIO_INITIAL_VOL → 0 ao longo de SLIDE_DURATION_MS
  const startAudioFadeOut = useCallback((): void => {
    clearAudioFadeOut();
    if (!audioRef.current) return;

    // Garante que começa do volume normal (pode ter sido interrompido antes)
    audioRef.current.volume = AUDIO_INITIAL_VOL;

    const STEPS    = 60;                              // quantas reduções acontecem
    const INTERVAL = SLIDE_DURATION_MS / STEPS;      // intervalo entre cada redução
    const DECREMENT = AUDIO_INITIAL_VOL / STEPS;     // quanto reduz por passo

    fadeOutRef.current = setInterval(() => {
      if (!audioRef.current) return;
      const newVol = Math.max(0, audioRef.current.volume - DECREMENT);
      audioRef.current.volume = newVol;
      if (newVol === 0) clearAudioFadeOut();
    }, INTERVAL);
  }, []);

  // ── Restaura volume normal (para quando sair antes) ─
  const restoreAudioVolume = (): void => {
    clearAudioFadeOut();
    if (audioRef.current) audioRef.current.volume = AUDIO_INITIAL_VOL;
  };

  // ── Avançar slide ──────────────────────────────────
  const goToNext = useCallback((): void => {
    const next    = (currentIndex + 1) % photos.length;
    const nextDir = KB_DIRECTIONS[next % KB_DIRECTIONS.length];

    setNextIndex(next);
    setNextKbDir(nextDir);
    setFading(true);

    setTimeout(() => {
      setCurrentIndex(next);
      setKbDir(nextDir);
      setNextIndex(null);
      setFading(false);
      progressVal.current = 0;
      setProgress(0);
    }, FADE_DURATION_MS);
  }, [currentIndex, photos.length]);

  // ── Timer do slide ─────────────────────────────────
  const startTimer = useCallback((): void => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isPausedRef.current) goToNext();
    }, SLIDE_DURATION_MS);
  }, [goToNext]);

  // ── Barra de progresso ─────────────────────────────
  const startProgress = useCallback((): void => {
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        progressVal.current += 100 / (SLIDE_DURATION_MS / 100);
        setProgress(Math.min(progressVal.current, 100));
      }
    }, 100);
  }, []);

  // ── Entrar em fullscreen ───────────────────────────
  const enterFullscreen = useCallback((): void => {
    const el = containerRef.current;
    if (!el) return;
    if (el.requestFullscreen)                    el.requestFullscreen();
    else if ((el as any).webkitRequestFullscreen) (el as any).webkitRequestFullscreen();
  }, []);

  // ── Inicialização ──────────────────────────────────
  useEffect(() => {
    setKbDir(KB_DIRECTIONS[0]);
    enterFullscreen();

    if (audioRef.current) {
      audioRef.current.volume       = AUDIO_INITIAL_VOL;
      audioRef.current.currentTime  = 0;
      audioRef.current.play().catch(() => {});
    }

    startTimer();
    startProgress();

    return () => {
      if (timerRef.current)    clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      clearAudioFadeOut();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Lógica por slide: timer, progresso e fade out ──
  // Roda toda vez que currentIndex muda
  useEffect(() => {
    if (currentIndex === 0) return; // primeiro slide já foi iniciado acima

    const isLastPhoto = currentIndex === photos.length - 1;

    // Se chegou na última foto, inicia o fade out do áudio
    if (isLastPhoto) {
      startAudioFadeOut();
    } else {
      // Se voltou a uma foto antes da última (usuário navegou), restaura volume
      restoreAudioVolume();
    }

    startTimer();
    startProgress();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // ── Detectar ESC / sair do fullscreen ─────────────
  useEffect(() => {
    const onFsChange = (): void => {
      const isFs =
        !!document.fullscreenElement ||
        !!(document as any).webkitFullscreenElement;
      if (!isFs) handleClose();
    };
    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Fechar ─────────────────────────────────────────
  const handleClose = useCallback((): void => {
    if (timerRef.current)    clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    clearAudioFadeOut();

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.volume      = AUDIO_INITIAL_VOL; // reseta para próxima abertura
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    onClose();
  }, [onClose]);

  // ── Pause / Play ───────────────────────────────────
  const togglePause = (): void => {
    const nowPaused = !isPaused;
    isPausedRef.current = nowPaused;
    setIsPaused(nowPaused);

    if (audioRef.current) {
      if (nowPaused) {
        audioRef.current.pause();
        clearAudioFadeOut(); // pausa o fade out também
      } else {
        audioRef.current.play().catch(() => {});
        // Se estava na última foto, retoma o fade out de onde parou
        if (currentIndex === photos.length - 1) {
          startAudioFadeOut();
        }
      }
    }

    if (nowPaused) {
      if (timerRef.current)    clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    } else {
      const remaining = SLIDE_DURATION_MS * (1 - progressVal.current / 100);
      timerRef.current = setTimeout(() => {
        if (!isPausedRef.current) goToNext();
      }, remaining);
      startProgress();
    }
  };

  // ── Navegação manual (botão anterior) ─────────────
  const goToPrev = (): void => {
    clearAudioFadeOut();
    restoreAudioVolume();

    const prev = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prev);
    setKbDir(KB_DIRECTIONS[prev % KB_DIRECTIONS.length]);
    progressVal.current = 0;
    setProgress(0);
  };

  // ── Teclado ────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape")     handleClose();
      if (e.key === " ")          togglePause();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft")  goToPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClose, goToNext, currentIndex]);

  const currentPhoto = photos[currentIndex];
  const nextPhoto    = nextIndex !== null ? photos[nextIndex] : null;

  return (
    <div className="ss-root" ref={containerRef}>

      {/* Áudio — adicione src quando tiver a música */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src={musicSrc}
      />

      {/* Slide atual */}
      <div
        className={`ss-slide${fading ? " ss-slide--fading-out" : ""}`}
        key={`current-${currentIndex}`}
      >
        <img src={currentPhoto.src} alt="" className="ss-img-blur" aria-hidden="true" draggable={false} />
        <img src={currentPhoto.src} alt={currentPhoto.alt} className={`ss-img ss-img--kb-${kbDir}`} draggable={false} />
      </div>

      {/* Próximo slide */}
      {nextPhoto && (
        <div className={`ss-slide ss-slide--next${fading ? " ss-slide--fading-in" : ""}`}>
          <img src={nextPhoto.src} alt="" className="ss-img-blur" aria-hidden="true" draggable={false} />
          <img src={nextPhoto.src} alt={nextPhoto.alt} className={`ss-img ss-img--kb-${nextKbDir}`} draggable={false} />
        </div>
      )}

      {/* Overlay */}
      <div className="ss-overlay" />

      {/* Barra de progresso */}
      <div className="ss-progress-bar">
        <div className="ss-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Contador */}
      <div className="ss-counter">
        {currentIndex + 1} <span>/</span> {photos.length}
      </div>

      {/* Controles */}
      <div className="ss-controls">
        <button className="ss-btn" onClick={goToPrev} aria-label="Foto anterior" title="Anterior (←)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button className="ss-btn ss-btn--main" onClick={togglePause} aria-label={isPaused ? "Retomar" : "Pausar"} title="Pausar / Retomar (Espaço)">
          {isPaused ? (
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          )}
        </button>

        <button className="ss-btn" onClick={goToNext} aria-label="Próxima foto" title="Próxima (→)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Fechar */}
      <button className="ss-close" onClick={handleClose} aria-label="Fechar apresentação" title="Fechar (ESC)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Watermark */}
      <div className="ss-watermark">Maria Antônia · 93 anos</div>
    </div>
  );
}
