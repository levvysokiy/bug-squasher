import { FC, useEffect } from 'react';
import { formatTime } from '../../utils';
import { useTimer } from '../../hooks/useTimer';
import './Timer.component.css';

interface TimerProps {
  onFinish: () => void;
}

const Timer: FC<TimerProps> = ({ onFinish }) => {
  const seconds = useTimer();

  const time = formatTime(seconds);

  useEffect(() => {
    if (!seconds) {
      onFinish();
    }
  }, [seconds]);

  return <div className='timer'>Time: {time}</div>;
};

export default Timer;
