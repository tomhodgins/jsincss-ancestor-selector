export default (selector, ancestor, rule) => {

  let styles = ''
  let count = 0

  Array.from(document.querySelectorAll(ancestor))
    .filter(tag => tag.querySelector(selector))
    .forEach(tag => {

      const attr = (selector+ancestor).replace(/\W/g, '')

      tag.setAttribute(`data-ancestor-${attr}`, count)
      styles += `${ancestor}[data-ancestor-${attr}="${count}"] { ${rule} }\n`
      count++

    })

  return styles

}