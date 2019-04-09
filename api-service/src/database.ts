import { Unicorn, UnicornSize } from './datamodel'

const pinkyKiller: Unicorn = {
  name: 'Mr Pinky Killer',
  color: 'Pink',
  size: UnicornSize.Huge,
}

const unicorns = [pinkyKiller]

const mockDb = { unicorns }

export { mockDb }
