(function() {

  let currentLine = ''
  let currentLineLength = 0

  Terminal.applyAddon(fit)

  let term = new Terminal({})

  term.open(document.getElementById('#terminal'))

  term.prompt = () => {
    term.write('\r\n$ ')
  }

  term.fit()
  term.prompt()

  term._core.register(term.addDisposableListener('key', (key, ev) => {
    const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

    if (ev.keyCode === 13) {
      term.prompt()
    } else if (ev.keyCode === 8) {
      // Do not delete the prompt
      if (currentLineLength > 0) {
        term.write('\b \b')
        currentLineLength--
        currentLine = currentLine.substring(0, currentLine.length - 1)
      }
    } else if (printable) {
      currentLine = currentLine.concat(key)
      term.write(key)
      currentLineLength++
    }

    console.log('Line: ', currentLine, 'Length: ', currentLineLength)
  }))

  term._core.register(term.addDisposableListener('paste', (data, ev) => {
    term.write(data)
  }))

  term.on('linefeed', (...args) => {
    console.log(args)
  })
})()