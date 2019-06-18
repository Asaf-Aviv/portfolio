import React, {
  useRef, useEffect, useCallback, useContext, useState,
} from 'react';
import { Logo } from './ClassExporter';
import { LogosContext } from './LogoLoaderProvider';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';

const Canvas: React.FC = () => {
  const isDocumentVisible = useDocumentVisibility();
  const [isContextReady, setIsContextReady] = useState<boolean>(false);

  const LogosLoader = useContext(LogosContext);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D>();
  const intervalIdRef = useRef<number>();
  const flyingLogosRef = useRef<Logo[]>([]);

  const generateLogo = useCallback((): Logo => (
    new Logo(ctx.current!, LogosLoader.pickRandomLogo())
  ), [LogosLoader]);

  useEffect(() => {
    const resizeCanvas = () => {
      canvasRef.current!.width = window.innerWidth;
      canvasRef.current!.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  useEffect(() => {
    ctx.current = canvasRef.current!.getContext('2d')!;
    flyingLogosRef.current.push(...[...Array(5)].map(generateLogo));
    setIsContextReady(true);
  }, [generateLogo]);

  useEffect(() => {
    let animationId: number;

    const init = () => {
      if (!isContextReady) return;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        ctx.current!.clearRect(0, 0, ctx.current!.canvas.width, ctx.current!.canvas.height);
        flyingLogosRef.current = flyingLogosRef.current.reduce((inViewLogos: Logo[], logo) => {
          if (
            !logo.alreadySeen
            || !logo.isOutOfView()
            || !logo.miniLogos.every(m => m.isOutOfView())
          ) {
            inViewLogos.push(logo);
            logo.miniLogos.forEach(({ isOutOfView, update }) => {
              if (!isOutOfView()) update();
            });
            logo.update();
          }
          return inViewLogos;
        }, []);
      };

      if (isDocumentVisible) {
        intervalIdRef.current = window.setInterval(() => {
          const shouldCreate = Math.random() > 0.25;
          if (shouldCreate) {
            const numOfLogos = Math.floor(Math.random() * (5 - 1)) + 1;
            flyingLogosRef.current.push(...[...Array(numOfLogos)].map(generateLogo));
          }
        }, 3000);
      }

      animate();
    };

    setTimeout(init, 5000);

    return () => {
      cancelAnimationFrame(animationId);
      window.clearInterval(intervalIdRef.current);
    };
  }, [generateLogo, isContextReady, isDocumentVisible]);

  return (
    <canvas ref={canvasRef} style={{ position: 'fixed', zIndex: -1 }} />
  );
};

export default Canvas;
