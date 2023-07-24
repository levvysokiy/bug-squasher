import { Routes, BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/home/Home.page';
import GamePage from './pages/game/Game.page';
import ScorePage from './pages/score/Score.page';
import './App.css';
import { GAME_PAGE_URL, HOME_PAGE_URL, SCORE_PAGE_URL } from './const';
import React, { FC, createContext, useState } from 'react';

interface ScoreContextValue {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: ScoreContextValue = {
  score: 0,
  setScore: () => {},
};

export const ScoreContext = createContext(defaultValue);

const App: FC = () => {
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE_URL} Component={HomePage} />
          <Route path={GAME_PAGE_URL} Component={GamePage} />
          <Route path={SCORE_PAGE_URL} Component={ScorePage} />
        </Routes>
      </BrowserRouter>
    </ScoreContext.Provider>
  );
};

export default App;
