export default class LogosLoader {
  private logos: HTMLImageElement[];

  constructor(logos: HTMLImageElement[]) {
    this.logos = logos;
  }

  public pickRandomLogo = (): HTMLImageElement => (
    this.logos[Math.trunc(Math.random() * this.logos.length)]
  )
}
