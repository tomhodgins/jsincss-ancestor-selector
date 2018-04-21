export default (selector, ancestor, rule) => {

  return Array.from(document.querySelectorAll(ancestor))

    .filter(tag => tag.querySelector(selector))

    .reduce((styles, tag, count) => {

      const attr = (selector + ancestor).replace(/\W/g, '')

      tag.setAttribute(`data-ancestor-${attr}`, count)
      styles += `${ancestor}[data-ancestor-${attr}="${count}"] { ${rule} }\n`
      count++

      return styles

    }, '')

}
