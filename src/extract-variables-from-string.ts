import { VARIABLE_USE_RE } from "./shared"

export function extractVariablesFromString(value: string) {
  let executed = null
  const variables = []

  while ((executed = VARIABLE_USE_RE.exec(value)) !== null) {
    // Avoid infinite loops with zero-width matches.
    if (executed.index === VARIABLE_USE_RE.lastIndex) {
      VARIABLE_USE_RE.lastIndex++
    }
    variables.push(executed[1])
  }

  return variables;
}
