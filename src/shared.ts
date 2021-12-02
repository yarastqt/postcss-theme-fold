import { ChildNode, Declaration } from "postcss"

export const THEME_SELECTOR_RE = /^(.Theme_)|(:root)/
export const VARIABLE_DECL_RE = /^--/
export const VARIABLE_USE_RE = /var\(\s*(--[^,\s)]+)/g
export const VARIABLE_FULL_RE = /var\((--[\w-]+)\)/

export type EnhancedChildNode = ChildNode & {
  processed: boolean;
  broken: boolean;
  original: ChildNode;
  parent: {
    selector: string
  }
}
