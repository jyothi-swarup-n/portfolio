import { useEffect, useRef, useCallback } from "react";

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number }[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const animRef = useRef<number>(0);
  const isTouchDevice = useRef(false);

  const handleMove = useCallback((x: number, y: number) => {
    mouse.current = { x, y };
    points.current.push({ x, y, age: 0 });
    if (points.current.length > 50) points.current.shift();
  }, []);

  useEffect(() => {
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      if (!isTouchDevice.current) handleMove(e.clientX, e.clientY);
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handleMove(t.clientX, t.clientY);
    };
    const onTouchEnd = () => {
      points.current = [];
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      points.current.forEach((p) => { p.age += 1; });
      points.current = points.current.filter((p) => p.age < 40);

      if (points.current.length > 1) {
        for (let i = 0; i < points.current.length; i++) {
          const p = points.current[i];
          const progress = 1 - p.age / 40;
          const size = progress * 4;
          const alpha = progress * 0.6;
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(43, 55%, 54%, ${alpha})`;
          ctx.fill();
        }
      }

      // Main cursor dot (desktop only)
      if (!isTouchDevice.current) {
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(43, 55%, 54%, 0.8)";
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 12, 0, Math.PI * 2);
        ctx.strokeStyle = "hsla(43, 55%, 54%, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [handleMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CursorTrail;
