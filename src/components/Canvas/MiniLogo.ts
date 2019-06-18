/* eslint-disable lines-between-class-members */
import { Logo } from './ClassExporter';
import { randomNum } from '../../utils/index';

export default class MiniLogo extends Logo {
  ctx: CanvasRenderingContext2D;
  logo: HTMLImageElement;
  radius: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  gravity: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    logo: HTMLImageElement,
    radius: number,
    x: number,
    gravity: number,
  ) {
    super(ctx, logo);
    this.ctx = ctx;
    this.logo = logo;
    this.radius = radius / randomNum(1.3, 2);
    this.x = x;
    this.y = this.ctx.canvas.height - this.radius;
    this.dx = Math.random() > 0.5 ? randomNum(2, 3.5) : -randomNum(2, 3.5);
    this.dy = -randomNum(1, 4);
    this.gravity = gravity;
  }

  draw = () => {
    this.ctx.drawImage(this.logo, this.x, this.y, this.radius, this.radius);
  }

  update = () => {
    if (this.y + this.radius + this.dy > this.ctx.canvas.height) {
      // eslint-disable-next-line no-use-before-define
      this.dy = -this.dy * 0.8;
    } else {
      this.dy += this.gravity;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}
