import "./museuAbertura.css";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import { useNavigate } from 'react-router-dom';


function RoseSVG({ size, rotate, opacity, style }: { size: number; rotate: number; opacity: number; style?: CSSProperties; }) {
    return (
      <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{
        position: "absolute",
        transform: `rotate(${rotate}deg)`,
        opacity,
        pointerEvents: "none",
        ...style,
      }}
    >
      <g transform="translate(100,100)">
        {[0,40,80,120,160,200,240,280,320].map((a, i) => (
          <g key={i} transform={`rotate(${a})`}>
            <ellipse
              cx="0" cy={-(22 + i * 4)}
              rx={10 + i * 1.5} ry={18 + i * 2}
              fill={i < 3 ? "#b57182" : i < 6 ? "#833f4a" : "#bf253e"}
              opacity={0.85 - i * 0.04}
            />
          </g>
        ))}
        {[0,45,90,135,180,225,270,315].map((a, i) => (
          <g key={`m${i}`} transform={`rotate(${a + 22})`}>
            <ellipse
              cx="0" cy={-(14 + i * 3)}
              rx={7 + i} ry={13 + i * 1.5}
              fill={i < 3 ? "#792439" : "#820c20"}
              opacity={0.7}
            />
          </g>
        ))}
        <circle cx="0" cy="0" r="12" fill="#3B010B" />
        <circle cx="0" cy="0" r="7" fill="#933e4b" />
      </g>
      {[30, 100, 155].map((y, i) => (
        <g key={`leaf${i}`} transform={`translate(${20 + i * 15}, ${y}) rotate(${-30 + i * 25})`}>
          <ellipse cx="0" cy="0" rx="8" ry="18" fill="#2d1a0e" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}


function MuseuAbertura() {
      const navigate = useNavigate();
        const [visible, setVisible] = useState(false);
      useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
      }, []);
    
      return (
              <div className="hero-root">
            <div className="bg-gradient" />
            <div className="bg-texture" />

            <RoseSVG size={340} rotate={-18} opacity={0.16} style={{ position:"absolute", top:"-7%", left:"-6%", zIndex:2 }} />
            <RoseSVG size={300} rotate={145} opacity={0.13} style={{ position:"absolute", bottom:"-4%", right:"-5%", zIndex:2 }} />
            <RoseSVG size={160} rotate={28} opacity={0.10} style={{ position:"absolute", top:"3%", right:"4%", zIndex:2 }} />
            <RoseSVG size={140} rotate={-5} opacity={0.09} style={{ position:"absolute", bottom:"8%", left:"6%", zIndex:2 }} />

            {[
              { left:"15%", animDuration:"14s", animDelay:"0s", size:8 },
              { left:"35%", animDuration:"18s", animDelay:"4s", size:6 },
              { left:"60%", animDuration:"12s", animDelay:"2s", size:9 },
              { left:"80%", animDuration:"16s", animDelay:"7s", size:7 },
              { left:"50%", animDuration:"20s", animDelay:"10s", size:5 },
            ].map((p, i) => (
              <div
                key={i}
                className="petal-float"
                style={{
                  left: p.left,
                  width: p.size,
                  height: p.size * 1.4,
                  borderRadius: "50% 50% 40% 60%",
                  background: "#75162D",
                  animationDuration: p.animDuration,
                  animationDelay: p.animDelay,
                }}
              />
            ))}

            <div className={`content ${visible ? "visible" : ""}`}>
              <p className="eyebrow">Uma vida de amor &amp; memórias</p>
              <div className="divider-line" />

              <h1 className="title">
                Museu das
                <span className="title-accent">Memórias</span>
              </h1>

              <p className="subtitle-name">de Vovó</p>

              <div className="ornament">
                <div className="ornament-line" />
                <div className="ornament-diamond" />
                <div className="ornament-line rev" />
              </div>

              <p className="description">
                Noventa e três anos de histórias, sorrisos e amor incondicional.
                Cada foto, cada vídeo, cada lembrança guardada aqui é um pedaço
                do coração de uma família inteira — que existe por causa dela.
              </p>

              <div className="btn-wrapper">
                <div className="btn-glow" />
                <button className="btn-main"
                onClick={() => navigate('/museu')}
                >
                  Entrar no Museu
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="footer-note">93 anos · Uma história de amor</p>
          </div>
      );
}

export default MuseuAbertura;