import { FC } from 'react';
import { Point } from '../../services/Bug.service';
import bugImage from '../../img/bug.png';
import { BUG_SIZE } from '../../const';
import './Bug.component.css';

interface BugProps {
  point: Point | null;
  onClick: () => void;
}

const Bug: FC<BugProps> = ({ point, onClick }) => (
  <>
    {point && (
      <div
        onClick={onClick}
        className='bug'
        style={{
          width: BUG_SIZE,
          height: BUG_SIZE,
          left: point.x,
          top: point.y,
        }}
      >
        <img src={bugImage} alt='bug.png' />
      </div>
    )}
  </>
);

export default Bug;
