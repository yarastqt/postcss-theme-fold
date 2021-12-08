const cache = { value: null, key: null }

export function getFromCache<T>(key: any, fx: () => T): T {
  // Serialize key for easy compare.
  key = JSON.stringify(key)

  if (cache.value === null || cache.key !== key) {
    cache.value = fx() as any
    cache.key = key
  }

  return cache.value as any
}
