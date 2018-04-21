mixin('ancestor', ['selector', 'ancestor', 'rule'],
  returnValue('Array.from(document.querySelectorAll(ancestor))',
    filterFunc('tag.querySelector(selector)',
      reduceFunc(
        createAttribute(['selector', 'ancestor'],
          addAttribute('tag', 'ancestor',
            addRule('${ancestor}', '', 'ancestor')))))))
