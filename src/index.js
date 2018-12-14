const Terminal = require('xterm').Terminal
const fit = require('xterm/lib/addons/fit/fit')
const WebfontLoader = require('xterm-webfont')

const dispatcher = require('./dispatcher')
const theme = require('./theme')
const format = require('./format')

let currentLine = ''
let currentLineLength = 0

Terminal.applyAddon(fit)
Terminal.applyAddon(WebfontLoader)

let terminalOptions = {
  theme,
  fontFamily: "Share Tech Mono"
}

let term = new Terminal(terminalOptions)
window.term = term // DEBUG
term.loadWebfontAndOpen(document.getElementById('#terminal'))

term.prompt = () => {
  term.write(`${format.newLine()}$ `)
}

//term.fit()

// Intro time!
term.write(`${format.addEscapeCharacter('cyanText')}     *     ${format.newLine()}     |     ${format.newLine()}***********${format.newLine()}**       **${format.newLine()}**  ^ ^  **${format.newLine()}**   o   **${format.newLine()}**       **${format.newLine()}***********${format.newLine()}${format.addEscapeCharacter('resetAll')}Welcome to ${format.addEscapeCharacter('brightGreenText')}https://nodebotani.st!${format.addEscapeCharacter('resetAll')}${format.newLine()}This is my personal portfolio site, as well as a terminal you can${format.newLine()}${format.addEscapeCharacter('magentaText')}control some of my robotics projects${format.addEscapeCharacter('resetAll')} from!${format.newLine()}Use the ${format.addEscapeCharacter('brightMagentaText')}'help'${format.addEscapeCharacter('resetAll')} command to see all available dispatcher${format.newLine()} `)

term.prompt()
// end Intro

term._core.register(term.addDisposableListener('key', (key, ev) => {
  const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;

  if (ev.keyCode === 13) {
    term.write(`${format.newLine()}`)
    term.write(dispatcher.run(currentLine.split(' ')))
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

