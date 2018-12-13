const Terminal = require('xterm').Terminal
const fit = require('xterm/lib/addons/fit/fit')
const WebfontLoader = require('xterm-webfont')

const commands = require('./commands')
const theme = require('./theme')
const format = require('./formatting')

let currentLine = ''
let currentLineLength = 0

Terminal.applyAddon(fit)
Terminal.applyAddon(WebfontLoader)

let terminalOptions = {
  theme,
  fontFamily: "VT323"
}

let term = new Terminal(terminalOptions)
window.term = term // DEBUG
term.loadWebfontAndOpen(document.getElementById('#terminal'))

term.prompt = () => {
  term.write('\r\n$ ')
}

//term.fit()

// Intro time!
term.write(`
Welcome to ${format('lightGreenText')}nodebotani.st!${format('resetAll')}
`)

term.prompt()
// end Intro

term._core.register(term.addDisposableListener('key', (key, ev) => {
  const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

  if (ev.keyCode === 13) {
    term.write('\r\n')
    term.write(commands.runCommand(currentLine.split(' ')))
    currentLine =  ''
    currentLineLength = 0
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
}))

term._core.register(term.addDisposableListener('paste', (data, ev) => {
  term.write(data)
}))

