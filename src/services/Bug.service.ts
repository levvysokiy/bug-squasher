import { BUG_MOVE_STEP, BUG_SIZE, DIRECTIONS } from '../const';

export interface Point {
  x: number;
  y: number;
}

export class BugService {
  static height: number = BUG_SIZE;
  static width: number = this.height;

  static createRandomPoint(): Point {
    return {
      x: Math.round(Math.random() * (document.body.clientWidth - this.width)),
      y: Math.round(Math.random() * (document.body.clientHeight - this.height)),
    };
  }

  static updatePoint(point: Point): Point {
    const randomIndex: number = Math.round(
      Math.random() * (DIRECTIONS.length - 1)
    );
    const direction = DIRECTIONS[randomIndex];

    const newPoint = { ...point };

    if (direction.includes('UP')) {
      newPoint.y = point.y - BUG_MOVE_STEP;
    }

    if (direction.includes('DOWN')) {
      newPoint.y = point.y + BUG_MOVE_STEP;
    }

    if (direction.includes('LEFT')) {
      newPoint.x = point.x - BUG_MOVE_STEP;
    }

    if (direction.includes('RIGHT')) {
      newPoint.x = point.x + BUG_MOVE_STEP;
    }

    if (newPoint.x < 0) {
      newPoint.x = 0;
    }

    if (newPoint.x + this.width > document.body.clientWidth) {
      newPoint.x = document.body.clientWidth - this.width;
    }

    if (newPoint.y < 0) {
      newPoint.y = 0;
    }

    if (newPoint.y + this.height > document.body.clientHeight) {
      newPoint.y = document.body.clientHeight - this.height;
    }

    return newPoint;
  }
}
