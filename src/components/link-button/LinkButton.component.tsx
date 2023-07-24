import { FC } from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.component.css';

interface LinkButtonProps {
  text: string;
  url: string;
  onClick?: () => void;
}

const LinkButton: FC<LinkButtonProps> = ({ url, text, onClick }) => (
  <Link to={url}>
    <button onClick={onClick} className='link-button'>
      {text}
    </button>
  </Link>
);

export default LinkButton;
