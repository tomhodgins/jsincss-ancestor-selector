function ancestor(selector, ancestor, rule) {
  const attr = (selector + ancestor).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(ancestor))
    .filter(tag => tag.querySelector(selector))
    .reduce((output, tag, count) => {
        output.add.push({tag: tag, count: count})
        output.styles.push(`${ancestor}[data-ancestor-${attr}="${count}"] { ${rule} }`)
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-ancestor-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-ancestor-${attr}`, ''))
  return result.styles.join('\n')
}
