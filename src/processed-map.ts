import { EnhancedChildNode } from './shared'

export type ProcessedProps = {
  value: string
  prop: string
  selector?: string
  processed?: boolean
}

export function addValueToMap(
  map: Map<string, ProcessedProps[]>,
  selector: string,
  item: ProcessedProps,
): void {
  const currentValue = map.get(selector)
  if (currentValue) {
    if (
      currentValue.some(
        ({ selector, value, prop }) =>
          selector === item.selector && value === item.value && prop === item.prop,
      )
    ) {
      return
    }
    map.set(selector, [...currentValue, item])
  } else {
    map.set(selector, [item])
  }
}

export function removeValueFromMap(
  map: Map<string, ProcessedProps[]>,
  themeSelector: string,
  value: ProcessedProps,
): void {
  const currentValue = map.get(themeSelector)
  if (!currentValue) return

  const nextValue = currentValue.map((item) => {
    if (
      item.prop === value.prop &&
      item.value === value.value &&
      item.selector === value.selector
    ) {
      item.processed = true
    }
    return item
  })
  map.set(themeSelector, nextValue)
}

export function checkNodesProcessed(
  map: Map<string, ProcessedProps[]>,
  nodes: EnhancedChildNode[],
  themeSelector: string,
): void {
  nodes.forEach((node) => {
    if (node.type === 'decl' && node.parent.type === 'rule') {
      removeValueFromMap(map, themeSelector, {
        value: node.value,
        prop: node.prop,
        selector: node.parent.selector?.trim(),
      })
    }
  })
}

export function hasUnprocessedNodes(
  map: Map<string, ProcessedProps[]>,
  themeSelector: string,
): boolean {
  return Boolean(
    map.has(themeSelector) && map.get(themeSelector)?.some(({ processed }) => !processed),
  )
}
