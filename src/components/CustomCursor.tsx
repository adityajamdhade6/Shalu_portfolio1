import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Actual mouse position
  const mousePos = useRef({ x: 0, y: 0 });
  // Lagging ring position
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Snap dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Smooth lag loop for the ring
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.1);

      if (ringRef.current) {
        const size = isHovering ? 48 : 32;
        ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    // Hover detection
    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer').forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    attachHover();
    const mo = new MutationObserver(attachHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
      mo.disconnect();
    };
  }, [isHovering]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Dot : snaps instantly */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] top-0 left-0 will-change-transform"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        <div
          className="rounded-full bg-foreground transition-all duration-150"
          style={{ width: isHovering ? 6 : 8, height: isHovering ? 6 : 8 }}
        />
      </div>

      {/* Ring : lags behind with lerp */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] top-0 left-0 will-change-transform"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s, width 0.2s, height 0.2s",
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
      >
        <div
          className="w-full h-full rounded-full border transition-all duration-200"
          style={{
            borderColor: isHovering
              ? "hsl(var(--foreground))"
              : "hsl(var(--foreground) / 0.45)",
            background: isHovering ? "hsl(var(--foreground) / 0.06)" : "transparent",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
