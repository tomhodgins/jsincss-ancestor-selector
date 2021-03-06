# jsincss-ancestor-selector

An ancestor selector plugin for [jsincss](https://github.com/tomhodgins/jsincss)

## About

This plugin is a JavaScript module that works with [JS-in-CSS stylesheets](https://responsive.style/theory/what-is-a-jic-stylesheet.html), to select all ancestors of an element that match a CSS selector.

## Downloading

You can download jsincss-ancestor-selector and add it to your codebase manually, or download it with npm:

```bash
npm install jsincss-ancestor-selector
```

Another option that works for building or testing, that isn't ideal for production use, is linking to the module directly from a CDN like unpkg:

```html
<script type=module>
  import ancestor from 'https://unpkg.com/jsincss-ancestor-selector/index.vanilla.js'
</script>
```

## Importing

This plugin exists in three different formats:

- CommonJS module: [index.js](index.js)
- Vanilla JS module: [index.vanilla.js](index.vanilla.js)
- Browser function: [index.browser.js](index.browser.js)

You can import this plugin using the native [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) statement in JavaScript. Here you can assign any name you want to the function you are importing, and you only need to provide a path to the plugin's `index.vanilla.js` file:

```js
import ancestor from './index.vanilla.js'
```

You can also use the CommonJS-formatted module located at [index.js](index.js) with `require()` for use with bundlers that don't use vanilla JS modules.

Once you have imported this plugin into your module, you can use the plugin as `ancestor()`

## Using JS-in-CSS Stylesheets

The main goal of this plugin is to allow CSS authors to apply styles to all ancestors of an element that match a given CSS selector.

The plugin has the following format:

```js
ancestor(selector, ancestor, rule)
```

- `selector` is a string that contains a CSS selector
- `ancestor` is a string that contains a CSS selector
- `rule` is a string or template string that contains a CSS rule

## Example

This example will use the `jsincss` plugin to load a JS-in-CSS stylesheet making use of this plugin. To test it in a JavaScript module, import both the `jsincss` package and any helper plugins you want:

```html
<script type=module>
  import jsincss from 'https://unpkg.com/jsincss/index.vanilla.js'
  import ancestor from 'https://unpkg.com/jsincss-ancestor-selector/index.vanilla.js'

  jsincss(() => `

    ${ancestor('li', 'ul', `
      background: orange;
    `)}

  `)
</script>
```

It's also possible to write your stylesheets as a separate JavaScript module like this, where you import any helper plugins at the top of the stylesheet:

```js
import ancestor from 'https://unpkg.com/jsincss-ancestor-selector/index.vanilla.js'

export default () => `

  ${ancestor('li', 'ul', `
    background: orange;
  `)}

`
```

And then import both the `jsincss` plugin and the stylesheet into your code and run them like this, suppling any `selector` or `events` list the `jsincss` plugin might need to apply the stylesheet only the the element(s) and event(s) you require, depending on what you're doing:

```js
import jsincss from 'https://unpkg.com/jsincss/index.vanilla.js'
import stylesheet from './path/to/stylesheet.js'

jsincss(stylesheet)
```

## Compatible JS-in-CSS Stylesheet Loaders

- [jsincss](https://github.com/tomhodgins/jsincss)