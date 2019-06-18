export const randomNum = (min: number, max: number): number => (
  Math.random() * (max - min) + min
);

export const randomInt = (min: number, max: number): number => (
  Math.floor(Math.random() * (max - min)) + min
);
