import postcss, { AcceptedPlugin } from 'postcss'

function stripIndents(content: string) {
  return content.replace(/\s+/g, ' ').trim()
}

export function configureRunner(plugins: AcceptedPlugin[]) {
  return (input: string, output: string) => {
    return postcss(plugins)
      .process(input, { from: '' })
      .then((result) => {
        expect(stripIndents(result.css)).toEqual(stripIndents(output))
        expect(result.warnings()).toHaveLength(0)
        return result
      })
  }
}
