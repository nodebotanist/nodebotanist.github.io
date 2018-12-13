const Terminal = require('xterm').Terminal
const fit = require('xterm/lib/addons/fit/fit')
const WebfontLoader = require('xterm-webfont')

const commands = require('./commands')
const theme = require('./theme')

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
term.prompt()

term._core.register(term.addDisposableListener('key', (key, ev) => {
  const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

  if (ev.keyCode === 13) {
    term.write('\r\n')
    commands.runCommand(currentLine.split(' '))
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

term.setColor = (colorName) => {
  let colorCodes = {
    defaultForeground: '\e[39',
    black: '\u001b[30m',
    red: '\u001b[31m',
    green: '\u001b[32m',
    yellow: '\u001b[33m',
    blue: '\u001b[34m',
    magenta: '\u001b[35m',
    cyan: '\u001b[36m',
    white: '\u001b[37m',
    brightBlack: '\u001b[30;1m',
    brightRed: '\u001b[31;1m',
    brightGreen: '\u001b[32;1m',
    brightYellow: '\u001b[33;1m',
    brightBlue: '\u001b[34;1m',
    brightMagenta: '\u001b[35;1m',
    brightCyan: '\u001b[36;1m',
    brightWhite: '\u001b[37;1m',
    reset: '\u001b[0m',
  }
  term.write(colorCodes[colorName])
}
