// src/components/layout/ui/SplashScreen.jsx
import React, { useState, useEffect } from "react";
import kalbeIcon from "../../assets/logo/kalbe-icon.png";
import { useTheme } from "../../../context/ThemeContext";

const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState("enter"); // enter | hold | exit

  let isDark = false;
  try {
    const themeCtx = useTheme();
    if (themeCtx) isDark = themeCtx.isDark;
  } catch (e) {
    isDark =
      document.documentElement.getAttribute("data-theme") === "dark" ||
      document.documentElement.classList.contains("dark");
  }

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("exit"), 1400);
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 1400 + 500); // matches exit transition

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: isDark
          ? "radial-gradient(120% 120% at 50% 0%, #0E2015 0%, #060D08 55%, #040906 100%)"
          : "radial-gradient(120% 120% at 50% 0%, #E8F5EB 0%, #F8FAF6 55%, #F0FDF4 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "exit" ? 0 : 1,
        transform: phase === "exit" ? "scale(1.05)" : "scale(1)",
        filter: phase === "exit" ? "blur(6px)" : "blur(0)",
        transition:
          "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease",
        pointerEvents: phase === "exit" ? "none" : "all",
        overflow: "hidden",
      }}
    >
      {/* Animated ambient orbs */}
      <div className={`splash-orb splash-orb-1 ${isDark ? "dark" : "light"}`} />
      <div className={`splash-orb splash-orb-2 ${isDark ? "dark" : "light"}`} />

      {/* Grain/noise overlay for depth */}
      <div className="splash-grain" />

      {/* Logo card */}
      <div className="splash-stagger" style={{ "--d": "0s", zIndex: 2 }}>
        <div className={`splash-logo-card ${isDark ? "dark" : "light"}`}>
          <img src={kalbeIcon} alt="KALBE" className="splash-logo-img" />
        </div>
      </div>

      {/* Wordmark */}
      <div className="splash-stagger" style={{ "--d": "0.12s", zIndex: 2, marginTop: 22 }}>
        <div className={`splash-wordmark ${isDark ? "dark" : "light"}`}>KALBE</div>
      </div>

      {/* Tagline */}
      <div className="splash-stagger" style={{ "--d": "0.24s", zIndex: 2, marginTop: 10 }}>
        <div className={`splash-tagline ${isDark ? "dark" : "light"}`}>
          Innovation for a Better Life
        </div>
      </div>

      {/* Bottom: progress bar + footer */}
      <div className="splash-footer">
        <div className={`splash-progress-track ${isDark ? "dark" : "light"}`}>
          <div className={`splash-progress-bar ${isDark ? "dark" : "light"}`} />
        </div>
        <span className={`splash-footer-text ${isDark ? "dark" : "light"}`}>
          KALBE INTERNATIONAL
        </span>
      </div>

      <style>{`
        @keyframes splashPop {
          0%   { opacity: 0; transform: translateY(16px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50%      { transform: translate(-45%, -55%) scale(1.15); }
        }
        @keyframes shimmerDark {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes shimmerLight {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes progressLoad {
          0%   { width: 0%; }
          60%  { width: 70%; }
          100% { width: 100%; }
        }

        .splash-stagger {
          animation: splashPop 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--d);
        }

        .splash-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
        }
        .splash-orb-1.dark {
          top: 30%; left: 50%;
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(0, 214, 114, 0.22), transparent 70%);
          animation: orbFloat 6s ease-in-out infinite;
        }
        .splash-orb-1.light {
          top: 30%; left: 50%;
          width: 340px; height: 340px;
          background: radial-gradient(circle, rgba(13, 110, 56, 0.18), transparent 70%);
          animation: orbFloat 6s ease-in-out infinite;
        }
        .splash-orb-2.dark {
          top: 65%; left: 20%;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(13, 110, 56, 0.28), transparent 70%);
          animation: orbFloat 8s ease-in-out infinite reverse;
        }
        .splash-orb-2.light {
          top: 65%; left: 20%;
          width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(104, 166, 42, 0.15), transparent 70%);
          animation: orbFloat 8s ease-in-out infinite reverse;
        }

        .splash-grain {
          position: absolute; inset: 0;
          opacity: 0.04;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }

        .splash-logo-card.dark {
          width: 92px; height: 92px;
          border-radius: 26px;
          background: linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex; align-items: center; justify-content: center;
          box-shadow:
            0 24px 60px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.2),
            0 0 45px rgba(0,214,114,0.25);
        }
        .splash-logo-card.light {
          width: 92px; height: 92px;
          border-radius: 26px;
          background: linear-gradient(145deg, #FFFFFF, #F2F8F3);
          border: 1px solid rgba(13, 110, 56, 0.16);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex; align-items: center; justify-content: center;
          box-shadow:
            0 18px 45px rgba(13, 110, 56, 0.16),
            inset 0 1px 0 rgba(255,255,255,0.9),
            0 0 35px rgba(13, 110, 56, 0.12);
        }

        .splash-logo-img {
          height: 52px; width: auto; object-fit: contain;
          filter: drop-shadow(0 4px 14px rgba(13, 110, 56, 0.35));
        }

        .splash-wordmark {
          font-family: 'Montserrat', 'Arial Black', sans-serif;
          font-weight: 900;
          font-size: 30px;
          letter-spacing: 0.24em;
          padding-left: 0.24em;
        }
        .splash-wordmark.dark {
          background: linear-gradient(90deg, #ffffff 20%, #7CF5C0 40%, #ffffff 60%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerDark 2.8s linear infinite;
        }
        .splash-wordmark.light {
          background: linear-gradient(90deg, #1A241A 20%, #0D6E38 40%, #1A241A 60%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerLight 2.8s linear infinite;
        }

        .splash-tagline.dark {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(0, 214, 114, 0.85);
        }
        .splash-tagline.light {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0D6E38;
        }

        .splash-footer {
          position: absolute;
          bottom: 52px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          z-index: 2;
        }
        .splash-progress-track.dark {
          width: 120px; height: 3px;
          border-radius: 99px;
          background: rgba(255,255,255,0.1);
          overflow: hidden;
        }
        .splash-progress-track.light {
          width: 120px; height: 3px;
          border-radius: 99px;
          background: rgba(13,110,56,0.12);
          overflow: hidden;
        }

        .splash-progress-bar.dark {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, #0D6E38, #00D672);
          box-shadow: 0 0 12px rgba(0,214,114,0.6);
          animation: progressLoad 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .splash-progress-bar.light {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, #0D6E38, #68A62A);
          box-shadow: 0 0 12px rgba(13,110,56,0.3);
          animation: progressLoad 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .splash-footer-text.dark {
          font-family: 'Inter', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
        }
        .splash-footer-text.light {
          font-family: 'Inter', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(26,36,26,0.5);
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;