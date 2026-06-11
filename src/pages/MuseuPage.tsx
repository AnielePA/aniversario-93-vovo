import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./museuPage.css";
// import oitentaPrevi1 from "../assets/fotos/80anos/048.webp";
// import oitentaPrevi2 from "../assets/fotos/80anos/055.webp";
// import noventaPrevi1 from "../assets/fotos/90anos/0 (165).webp";
// import noventaPrevi2 from "../assets/fotos/90anos/0 (488).webp";
// import oitenta_e_nove_previ1 from "../assets/fotos/89anos/0 (75).webp";
// import oitenta_e_nove_previ2 from "../assets/fotos/89anos/0 (314).webp";
// import geralPrevi1 from "../assets/fotos/gerais/foto3.webp";
// import geralPrevi2 from "../assets/fotos/gerais/foto102.webp";

interface Section {
  id: string;
  icon: React.ReactNode;
  label: string;
  subtitle: string;
  description: string;
  route: string;
  accent: string;
  previews: string[];
}

const SECTIONS: Section[] = [
  {
    id: "gerais",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    label: "Ao Longo da Vida",
    subtitle: "Uma vida inteira em imagens",
    description:
      "Retratos antigos e recentes, sozinha e rodeada de amor — cada foto é um capítulo de uma história que pertence a todos nós.",
    route: "/galeria/gerais",
    accent: "#75162D",
    previews: [
    "https://res.cloudinary.com/diclhm335/image/upload/q_auto/f_auto/v1781207159/foto3_vtolcf.webp",
    "https://res.cloudinary.com/diclhm335/image/upload/q_auto/f_auto/v1781207350/foto102_k31jbu.webp",
  ],
  },
  {
    id: "90anos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    label: "Seleção de Fotos da Festa dos 90 Anos",
    subtitle: "Uma celebração inesquecível",
    description:
      "As memórias da grande festa que marcou nove décadas de vida, amor e alegria compartilhada com toda a família.",
    route: "/galeria/90anos",
    accent: "#560B18",
    previews: [
    "https://res.cloudinary.com/diclhm335/image/upload/q_auto/f_auto/v1781206077/0_165_ermkrp.webp",
    "https://res.cloudinary.com/diclhm335/image/upload/q_auto/f_auto/v1781206107/0_488_kltj1p.webp",
  ],
  },
  {
    id: "89anos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: "Seleção de Fotos da Festa dos 89 Anos",
    subtitle: "Mais um ano de gratidão",
    description:
      "Sorrisos, abraços e momentos que ficaram gravados para sempre — a festa dos 89 anos com quem ela mais ama.",
    route: "/galeria/89anos",
    accent: "#75162D",
    previews: [
    "https://res.cloudinary.com/diclhm335/image/upload/q_auto/f_auto/v1781206133/0_75_bnhrue.webp",
    "https://res.cloudinary.com/diclhm335/image/upload/q_auto/f_auto/v1781206146/0_314_vdxrso.webp",
  ],
  },
  {
    id: "80anos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Seleção de Fotos da Festa dos 80 Anos",
    subtitle: "Oito décadas de história",
    description:
      "Um marco especial na vida de uma mulher extraordinária. As fotos dos 80 anos guardam a essência de quem ela sempre foi.",
    route: "/galeria/80anos",
    accent: "#560B18",
    previews: [
    "https://res.cloudinary.com/diclhm335/image/upload/q_auto/f_auto/v1781207744/048_ig5s48.webp",
    "https://res.cloudinary.com/diclhm335/image/upload/q_auto/f_auto/v1781207756/055_ssac1t.webp",
  ],
  },
  {
    id: "videos",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    label: "Vídeos",
    subtitle: "Sua voz, seus gestos, seu jeito",
    description:
      "Ver é sentir. Estes vídeos guardam o que nenhuma foto consegue — o movimento, o riso, as palavras de uma mulher que nos faz inteiros.",
    route: "/galeria/videos",
    accent: "#3B010B",
    previews: [
    "https://res.cloudinary.com/diclhm335/image/upload/v1781206912/thumb1_fdzw26.jpg",
    "https://res.cloudinary.com/diclhm335/image/upload/v1781206919/thumb6_pthx9s.jpg",
  ],
  },
];


export default function MuseuPage(): React.ReactElement {
  const [menuOpen, setMenuOpen]   = useState<boolean>(false);
  const [photosOpen, setPhotosOpen] = useState<boolean>(false);
  const [scrolled, setScrolled]   = useState<boolean>(false);
  const navigate  = useNavigate();
  const menuRef   = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent): void => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setPhotosOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="mp-root">

      <header
        className={`mp-header${scrolled ? " mp-header--scrolled" : ""}`}
        ref={menuRef}
      >
        <div className="mp-header__inner">

          <button className="mp-logo" onClick={() => navigate("/")}>
            <span className="mp-logo__ornament">✦</span>
            <span className="mp-logo__name">Maria Antônia</span>
            <span className="mp-logo__ornament">✦</span>
          </button>

          <nav className="mp-nav desktop">
            <div className="mp-nav__item mp-nav__item--dropdown">
              <button
                className="mp-nav__link"
                onClick={() => setPhotosOpen((v) => !v)}
                aria-expanded={photosOpen}
              >
                Fotos
                <svg
                  className={`mp-nav__chevron${photosOpen ? " open" : ""}`}
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                >
                  <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {photosOpen && (
                <div className="mp-dropdown">
                  {(["gerais", "80anos", "89anos", "90anos"] as const).map((s) => (
                    <button
                      key={s}
                      className="mp-dropdown__item"
                      onClick={() => { navigate(`/galeria/${s}`); setPhotosOpen(false); }}
                    >
                      {s === "gerais" ? "Gerais" : `${s.replace("anos", "")} Anos`}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="mp-nav__link"
              onClick={() => navigate("/galeria/videos")}
            >
              Vídeos
            </button>
          </nav>

          <button
            className={`mp-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {menuOpen && (
          <div className="mp-mobile-menu">
            <div className="mp-mobile-section">
              <button
                className="mp-mobile-toggle"
                onClick={() => setPhotosOpen((v) => !v)}
              >
                Fotos
                <svg
                  className={`mp-nav__chevron${photosOpen ? " open" : ""}`}
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                >
                  <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {photosOpen && (
                <div className="mp-mobile-sub">
                  {(["gerais", "80anos", "89anos", "90anos"] as const).map((s) => (
                    <button
                      key={s}
                      className="mp-mobile-sub__item"
                      onClick={() => { navigate(`/galeria/${s}`); setMenuOpen(false); }}
                    >
                      {s === "gerais" ? "Gerais" : `${s.replace("anos", "")} Anos`}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="mp-mobile-toggle"
              onClick={() => { navigate("/galeria/videos"); setMenuOpen(false); }}
            >
              Vídeos
            </button>
          </div>
        )}
      </header>

      <section className="mp-page-hero">
        <div className="mp-page-hero__deco" aria-hidden="true">
          <span>93</span>
        </div>
        <p className="mp-page-hero__eyebrow">Museu das Memórias</p>
        <h1 className="mp-page-hero__title">Uma vida de amor</h1>
        <p className="mp-page-hero__sub">
          Navegue pelas recordações e deixe cada imagem contar um pedaço dessa história linda.
        </p>
      </section>

      <main className="mp-main">
        {SECTIONS.map((sec, idx) => (
          <section
            key={sec.id}
            className={`mp-section mp-section--${idx % 2 === 0 ? "even" : "odd"}`}
          >
            <div className="mp-section__inner">

              <div className="mp-section__header">
                <div
                  className="mp-section__icon"
                  style={{ "--accent": sec.accent } as React.CSSProperties}
                >
                  {sec.icon}
                </div>
                <div>
                  <h2 className="mp-section__title">{sec.label}</h2>
                  <p className="mp-section__subtitle">{sec.subtitle}</p>
                </div>
              </div>

              <p className="mp-section__desc">{sec.description}</p>

              <div className="mp-section__gallery">
                {sec.id !== "videos" ? (
                  sec.previews.map((src, i) => (
                    <div key={i} className="mp-section__photo-wrap">
                      <img
                        src={src}
                        alt={`Amostra ${i + 1} — ${sec.label}`}
                        className="mp-section__photo"
                        loading="lazy"
                      />
                    </div>
                  ))
                ) : (
                  sec.previews.map((src, i) => (
                    <div key={i} className="mp-section__photo-wrap mp-section__photo-wrap--video">
                      <img src={src} alt="Thumbnail do vídeo" className="mp-section__photo" loading="lazy" />
                      <div className="mp-section__play-btn" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  ))
                )}

                <button
                  className="mp-section__see-more"
                  onClick={() => navigate(sec.route)}
                  style={{ "--accent": sec.accent } as React.CSSProperties}
                >
                  <span>Ver mais</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>

            {idx < SECTIONS.length - 1 && (
              <div className="mp-divider" aria-hidden="true">
                <span /><span className="mp-divider__diamond" /><span />
              </div>
            )}
          </section>
        ))}
      </main>

      <footer className="mp-footer">
        <p>Com amor, de Aniele Pereira Ardisson &nbsp;✦&nbsp; 2026</p>
      </footer>
    </div>
  );
}
