import { FC, useContext } from 'react';
import { ScoreContext } from '../../App';
import LinkButton from '../../components/link-button/LinkButton.component';
import { GAME_PAGE_URL } from '../../const';
import './Score.page.css';

const ScorePage: FC = () => {
  const { score, setScore } = useContext(ScoreContext);

  const handleClick = () => {
    setScore(0);
  };

  return (
    <div className='score-page'>
      <h1 className='score-page__score'>Your score is: {score}</h1>
      <LinkButton text='Try again!' url={GAME_PAGE_URL} onClick={handleClick} />
    </div>
  );
};

export default ScorePage;
