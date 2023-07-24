import { useRef, useEffect } from 'react';

export const useAnimation = (callback: () => void) => {
  const requestAnimationFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const animate = (time: number) => {
    if (time - timeRef.current > 300) {
      callback();
      timeRef.current = time;
    }
    requestAnimationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestAnimationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestAnimationFrameRef.current);
  }, []);
};
