import { useEffect, useRef, useState } from "react";
import "../styles/NeonBall.css";

export default function NeonBall() {
  const ballRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [burst, setBurst] = useState(false);

  const posRef = useRef({ x: window.innerWidth / 2, y: 50 });
  const velRef = useRef({ x: 3, y: 3 });
  const scrollYRef = useRef(0);

  const bounceCountRef = useRef(0);
  const MAX_BOUNCES = 3; // ball bursts after 3 bounces

  // Reset bounce count on scroll
  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      bounceCountRef.current = 0; // reset bounces on scroll
      if (window.scrollY >= 600) setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (!ballRef.current || burst) return; // stop moving if burst

      let { x, y } = posRef.current;
      let { x: vx, y: vy } = velRef.current;

      x += vx;
      y += vy;

      let bounced = false;

      // bounce off edges
      if (x < 0 || x > window.innerWidth - 50) {
        velRef.current.x = -vx;
        bounced = true;
      }
      if (y < 0 || y > window.innerHeight - 50) {
        velRef.current.y = -vy;
        bounced = true;
      }

      if (bounced) {
        bounceCountRef.current += 1;
        if (bounceCountRef.current >= MAX_BOUNCES) {
          setBurst(true); // trigger burst
          setTimeout(() => setVisible(false), 500); // CSS burst duration
        }
      }

      posRef.current = { x, y };
      ballRef.current.style.transform = `translate(${x}px, ${y + scrollYRef.current * 0.2}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [burst]);

  if (!visible) return null;

  return <div ref={ballRef} className={`neon-ball ${burst ? "burst" : ""}`} />;
}