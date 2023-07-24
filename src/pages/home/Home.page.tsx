import logo from '../../img/logo.png';
import './Home.page.css';
import LinkButton from '../../components/link-button/LinkButton.component';
import { GAME_PAGE_URL } from '../../const';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className='home-page'>
      <h1 className='home-page__title'>Bug squasher</h1>
      <img className='home-page__image' src={logo} alt='logo.png' />
      <LinkButton text='Start a game!' url={GAME_PAGE_URL} />
    </div>
  );
};

export default HomePage;
