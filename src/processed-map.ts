import { ChildNode } from 'postcss'

export type ProcessedProps = {
    value: string;
    prop: string;
}

export function addValueToMap(map: Map<string, ProcessedProps[]>, selector: string, value: ProcessedProps): void {
    const currentValue = map.get(selector);
    if (currentValue) {
        map.set(selector, [
            ...currentValue,
            value
        ]);
    } else {
        map.set(selector, [value])
    }
}

export function removeValueFromMap(map: Map<string, ProcessedProps[]>, selector: string, value: ProcessedProps): void {
    const currentValue = map.get(selector);
    if (!currentValue)
        return;

    const nextValue = currentValue.filter(item => {
        return item.prop !== value.prop || item.value !== value.value;
    })
    if (nextValue.length === 0) {
        map.delete(selector);
    } else {
        map.set(selector, nextValue);
    }
}

export function removeNodesFromMap(map: Map<string, ProcessedProps[]>, nodes: ChildNode[]): void {
    nodes.forEach(node => {
        if (node.type === 'decl' && node.parent.type === 'rule') {
            removeValueFromMap(map, node.parent.selector, {
                value: node.value,
                prop: node.prop
            });
        }
    })
}

