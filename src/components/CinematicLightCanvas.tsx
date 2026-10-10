import React, { useEffect, useRef } from 'react';

interface CinematicLightCanvasProps {
  className?: string;
  intensity?: number; // default: 1.0
  moteCount?: number; // default: 30
  showRibbons?: boolean; // default: true
  showHorizon?: boolean; // default: false
  glowColor?: string; // default: '201, 107, 90' (#C96B5A)
  extendToNextElementId?: string; // e.g. 'contact' to unify both sections into one background
  enableMouseLight?: boolean; // default: true (when false, renders pure ambient animation without mouse tracking light)
}

export const CinematicLightCanvas: React.FC<CinematicLightCanvasProps> = ({
  className = '',
  intensity = 1.0,
  moteCount = 30,
  showRibbons = true,
  showHorizon = false,
  glowColor = '201, 107, 90',
  extendToNextElementId,
  enableMouseLight = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = 650;

    const updateDimensions = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      let totalH = canvas.parentElement.clientHeight;

      if (extendToNextElementId) {
        const nextEl = document.getElementById(extendToNextElementId);
        if (nextEl) {
          totalH += nextEl.clientHeight;
        }
      }

      height = canvas.height = totalH;
      canvas.style.height = `${totalH}px`;
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    const measureTimer = setTimeout(updateDimensions, 300);

    // Mouse tracking relative to canvas element using window listener
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Floating cinematic light motes (weightless golden celluloid dust across full combined canvas)
    const motes = Array.from({ length: moteCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * (height || 1000),
      size: 0.8 + Math.random() * 2.2,
      speedY: -0.15 - Math.random() * 0.35,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: 0.15 + Math.random() * 0.45,
      pulse: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.01;

      // Spring lerp for liquid smooth motion
      mouseX += (targetMouseX - mouseX) * 0.045;
      mouseY += (targetMouseY - mouseY) * 0.045;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // 1. Deep Volumetric Ambient Glow spanning the unified canvas
      const ambientRadius = Math.max(width, height) * 0.6;
      const ambientGlow = ctx.createRadialGradient(cx, cy, 20, cx, cy, ambientRadius);
      ambientGlow.addColorStop(0, `rgba(${glowColor}, ${0.08 * intensity})`);
      ambientGlow.addColorStop(0.5, `rgba(${glowColor}, ${0.02 * intensity})`);
      ambientGlow.addColorStop(1, 'rgba(10, 10, 10, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Liquid Projector Beam Following Cursor across the entire continuous surface (optional)
      if (enableMouseLight) {
        const beamRadius = Math.min(width, Math.max(500, height * 0.4)) * 0.5;
        const cursorGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, beamRadius);
        cursorGlow.addColorStop(0, `rgba(${glowColor}, ${0.16 * intensity})`);
        cursorGlow.addColorStop(0.35, `rgba(229, 169, 136, ${0.055 * intensity})`);
        cursorGlow.addColorStop(0.7, `rgba(${glowColor}, ${0.012 * intensity})`);
        cursorGlow.addColorStop(1, 'rgba(10, 10, 10, 0)');
        ctx.fillStyle = cursorGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Ethereal Caustic Light Ribbons (Flowing Silk across the unified region)
      if (showRibbons) {
        const ribbons = [
          { yOffset: -80, amp: 48, freq: 0.0028, speed: 0.6, alpha: 0.08 * intensity, color: glowColor },
          { yOffset: 0, amp: 62, freq: 0.0022, speed: 0.45, alpha: 0.11 * intensity, color: '229, 169, 136' },
          { yOffset: 90, amp: 42, freq: 0.0034, speed: 0.7, alpha: 0.06 * intensity, color: '244, 241, 235' },
        ];

        ribbons.forEach((ribbon) => {
          ctx.beginPath();
          ctx.lineWidth = 1.5;
          const ribbonGrad = ctx.createLinearGradient(0, cy + ribbon.yOffset, width, cy + ribbon.yOffset);
          ribbonGrad.addColorStop(0, `rgba(${ribbon.color}, 0)`);
          ribbonGrad.addColorStop(0.3, `rgba(${ribbon.color}, ${ribbon.alpha * 0.7})`);
          ribbonGrad.addColorStop(0.5, `rgba(${ribbon.color}, ${ribbon.alpha * 1.4})`);
          ribbonGrad.addColorStop(0.7, `rgba(${ribbon.color}, ${ribbon.alpha * 0.7})`);
          ribbonGrad.addColorStop(1, `rgba(${ribbon.color}, 0)`);
          ctx.strokeStyle = ribbonGrad;

          for (let x = 0; x <= width; x += 6) {
            const distToCursor = Math.hypot(x - mouseX, cy + ribbon.yOffset - mouseY);
            const cursorPull = enableMouseLight ? Math.max(0, 1 - distToCursor / 350) * 20 : 0;

            const wave =
              Math.sin(x * ribbon.freq + time * ribbon.speed) * ribbon.amp +
              Math.cos(x * ribbon.freq * 1.8 - time * ribbon.speed * 0.7) * (ribbon.amp * 0.4) +
              (mouseY > cy + ribbon.yOffset ? cursorPull : -cursorPull);

            const y = cy + ribbon.yOffset + wave;

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        });
      }

      // 4. Subtle Optical Horizon Line (Optional)
      if (showHorizon) {
        const horizonY = cy - 40;
        const horizonDist = Math.abs(mouseY - horizonY);
        const horizonFlare = Math.max(0, 1 - horizonDist / 200) * 0.25;

        const horizonGrad = ctx.createLinearGradient(0, horizonY, width, horizonY);
        horizonGrad.addColorStop(0, `rgba(${glowColor}, 0)`);
        horizonGrad.addColorStop(0.4, `rgba(${glowColor}, ${0.08 + horizonFlare * 0.5})`);
        horizonGrad.addColorStop(0.5, `rgba(244, 241, 235, ${0.16 + horizonFlare})`);
        horizonGrad.addColorStop(0.6, `rgba(${glowColor}, ${0.08 + horizonFlare * 0.5})`);
        horizonGrad.addColorStop(1, `rgba(${glowColor}, 0)`);

        ctx.beginPath();
        ctx.moveTo(0, horizonY);
        ctx.lineTo(width, horizonY);
        ctx.strokeStyle = horizonGrad;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 5. Cinematic Floating Dust Motes (Warm amber embers throughout the full height)
      motes.forEach((mote) => {
        mote.y += mote.speedY;
        mote.x += mote.speedX + Math.sin(time + mote.pulse) * 0.15;

        if (mote.y < -10) mote.y = height + 10;
        if (mote.x < -10) mote.x = width + 10;
        if (mote.x > width + 10) mote.x = -10;

        const pulseAlpha = mote.opacity * intensity * (0.6 + Math.sin(time * 2 + mote.pulse) * 0.4);

        ctx.beginPath();
        ctx.arc(mote.x, mote.y, mote.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 169, 136, ${pulseAlpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(measureTimer);
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [intensity, moteCount, showRibbons, showHorizon, glowColor, extendToNextElementId, enableMouseLight]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full pointer-events-none z-0 ${className}`}
    />
  );
};
