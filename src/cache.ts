const ref = {
  current: null,
}

export function getFromCache<T>(fallback: () => T): T {
  if (ref.current === null) {
    ref.current = fallback() as any
  }
  return ref.current as any
}
