/* eslint-disable lines-between-class-members */
import { MiniLogo } from './ClassExporter';
import { randomNum, randomInt } from '../../utils';

export default class Logo {
  ctx: CanvasRenderingContext2D;
  logo: HTMLImageElement;
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  gravity: number;
  alreadySeen: boolean;
  enterFromLeft: boolean;
  miniLogos: MiniLogo[];

  constructor(
    ctx: CanvasRenderingContext2D,
    logo: HTMLImageElement,
  ) {
    this.ctx = ctx;
    this.logo = logo;
    this.enterFromLeft = Math.random() > 0.5;
    this.x = this.enterFromLeft ? -40 : ctx.canvas.width + 40;
    this.y = randomNum(10, 50) / 100 * ctx.canvas.height;
    this.dx = this.enterFromLeft ? randomNum(1.5, 4) : -randomNum(1.5, 4);
    this.dy = randomNum(1, 3);
    this.radius = randomInt(50, 100);
    this.gravity = randomNum(0.005, 0.01);
    this.alreadySeen = false;
    this.miniLogos = [];
  }

  draw = () => {
    this.ctx.drawImage(this.logo, this.x, this.y, this.radius, this.radius);
  }

  isOutOfView = () => (
    this.x + this.radius > this.ctx.canvas.width + this.radius * 2
    || this.x - this.radius < 0 - this.radius * 2
  )

    update = () => {
      if (!this.alreadySeen && !this.isOutOfView()) {
        this.alreadySeen = true;
      }

      if (this.y + this.radius + this.dy > this.ctx.canvas.height) {
        this.radius = this.radius / 1.5;

        if (!this.isOutOfView()) {
          // eslint-disable-next-line no-use-before-define
          this.miniLogos.push(...[...Array(3)].map(() => new MiniLogo(
            this.ctx, this.logo, this.radius, this.x, this.gravity,
          )));
        }

        this.dy = -this.dy * 0.9;
      } else {
        this.dy += this.gravity;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    }
}
