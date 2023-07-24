import { FC, useCallback, useContext, useState } from 'react';
import { BugService, Point } from '../../services/Bug.service';
import Bug from '../../components/bug/Bug.component';
import { useNavigate } from 'react-router-dom';
import Timer from '../../components/timer/Timer.component';
import { CREATE_NEW_BUG_TIMEOUT_MS, SCORE_PAGE_URL } from '../../const';
import { useAnimation } from '../../hooks/useAnimation';
import { ScoreContext } from '../../App';
import './Game.page.css';

const GamePage: FC = () => {
  const { score, setScore } = useContext(ScoreContext);
  const navigate = useNavigate();

  const [point, setPoint] = useState<Point | null>(
    BugService.createRandomPoint()
  );

  const updatePoint = useCallback(() => {
    setPoint((prevPoint) => prevPoint && BugService.updatePoint(prevPoint));
  }, []);

  useAnimation(updatePoint);

  const onTimerFinish = () => {
    navigate(SCORE_PAGE_URL);
  };

  const squash = () => {
    setScore((prevScore) => prevScore + 1);
    setPoint(null);

    setTimeout(() => {
      setPoint(BugService.createRandomPoint());
    }, CREATE_NEW_BUG_TIMEOUT_MS);
  };

  return (
    <div className='game-page'>
      <Timer onFinish={onTimerFinish} />
      <span className='game-page__score'>Score: {score}</span>
      <Bug point={point} onClick={squash} />
    </div>
  );
};

export default GamePage;
