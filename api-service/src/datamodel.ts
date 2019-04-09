export enum UnicornSize {
  Huge = 'huge',
  large = 'large',
  medium = 'medium',
  small = 'small',
  tiny = 'tiny',
  microscopic = 'microscopic',
}

export type Unicorn = {
  name: string
  color: number | string
  size: UnicornSize
}
