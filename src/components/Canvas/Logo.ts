/* eslint-disable lines-between-class-members */
const randomNum = (min: number, max: number): number => (
  Math.random() * (max - min) + min
);
const randomInt = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min)) + min
);

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
    // this.dx = this.enterFromLeft ? randomNum(0.6, 2.5) : -randomNum(0.6, 2.5);
    this.dx = this.enterFromLeft ? randomNum(1, 4) : -randomNum(1, 4);
    // this.dy = randomNum(0, 0.5);
    this.dy = randomNum(0.5, 2);
    this.radius = randomInt(30, 80);
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
      console.log('hit the ground');
      // eslint-disable-next-line no-use-before-define
      this.miniLogos.push(...[...Array(8)].map(() => new MiniLogo(
        this.ctx, this.logo, this.x, this.y, this.dx, this.dy, this.radius, this.gravity,
      )));

      console.log(this.miniLogos);

      this.dy = -this.dy * 0.9;
    } else {
      this.dy += this.gravity;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

class MiniLogo extends Logo {
  ctx: CanvasRenderingContext2D;
  logo: HTMLImageElement;
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  gravity: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    logo: HTMLImageElement,
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number,
    gravity: number,
  ) {
    super(ctx, logo);
    this.ctx = ctx;
    this.logo = logo;
    this.x = x;
    this.y = y;
    this.dx = randomNum(-5, 5);
    this.dy = Math.random() > 0.5 ? randomNum(1, 4) : -randomNum(1, 4);
    this.radius = radius;
    this.gravity = gravity;
  }

  draw = () => {
    this.ctx.drawImage(this.logo, this.x, this.y, this.radius, this.radius);
  }

  update = () => {
    if (this.y + this.radius + this.dy > this.ctx.canvas.height) {
      console.log('mini hit the ground');
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
