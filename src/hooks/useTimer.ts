import { useRef, useState, useEffect } from 'react';
import { TIME_TO_SQUASH_S } from '../const';

export const useTimer = () => {
  const [seconds, setSeconds] = useState<number>(TIME_TO_SQUASH_S);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const updateTime = () => {
    setSeconds((prev) => prev - 1);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!seconds && intervalRef.current) clearInterval(intervalRef.current);
  }, [seconds]);

  return seconds;
};
