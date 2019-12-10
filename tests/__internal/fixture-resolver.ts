import { resolve } from 'path'

export function resolveFixture(path: string): string {
  return resolve(__dirname, '../__fixtures__', path)
}
