import { useEffect, useRef, useState } from "react";
import { FiMoon } from "react-icons/fi";
import "../styles/NeonBall.css";

const SIZE = 60;
const OFFSET = 20;
const DURATION = 4000;

export default function NeonBallToDark() {
  const ballRef = useRef<HTMLDivElement>(null);

  const [showBall, setShowBall] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const startX = 0;
    const startY = 0;

    const endX = window.innerWidth - SIZE - OFFSET;
    const endY = window.innerHeight - SIZE - OFFSET;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!ballRef.current) return;
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / DURATION, 1);

      const x = startX + (endX - startX) * progress;
      const y = startY + (endY - startY) * progress;

      ballRef.current.style.transform = `translate(${x}px, ${y}px)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setShowBall(false);
        setShowButton(true);

        setTimeout(() => setReady(true), 400);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <>
      {showBall && <div ref={ballRef} className="neon-ball" />}

      {showButton && (
        <button
          className={`dark-btn ${
            ready ? (isDark ? "dark-ready" : "light-ready") : ""
          }`}
          onClick={() => setIsDark(v => !v)}
        >
          <FiMoon />
        </button>
      )}
    </>
  );
}
