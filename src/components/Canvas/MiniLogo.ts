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
  miniLogos: MiniLogo[];

  constructor(
    ctx: CanvasRenderingContext2D,
    logo: HTMLImageElement,
    radius: number,
    x: number,
    y: number,
    gravity: number,
  ) {
    super(ctx, logo);
    this.ctx = ctx;
    this.logo = logo;
    this.radius = radius / randomNum(1.3, 2);
    this.x = x;
    this.y = y;
    this.dx = Math.random() > 0.5 ? randomNum(2, 3.5) : -randomNum(2, 3.5);
    this.dy = Math.random() > 0.5 ? randomNum(1, 4) : -randomNum(1, 4);
    this.gravity = gravity;
    this.miniLogos = [];
  }

  shatter = () => {
    this.radius = this.radius / 1.5;

    this.miniLogos.push(...[...Array(3)].map(() => new MiniLogo(
      this.ctx, this.logo, this.radius, this.x, this.y, this.gravity,
    )));
  }

  update = () => {
    if (!this.alreadySeen && !this.isOutOfView()) {
      this.alreadySeen = true;
    }

    if (this.y + this.radius + this.dy > this.ctx.canvas.height) {
      this.dy = -this.dy * 0.9;
    } else {
      this.dy += this.gravity;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}
