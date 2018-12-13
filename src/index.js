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
  fontFamily: "Share Tech Mono"
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
${format('cyanText')}
     *     \r
     |     \r
***********\r
**       **\r
**  ^ ^  **\r
**   o   **\r
**       **\r
***********\r\n
${format('resetAll')}
Welcome to ${format('brightGreenText')}https://nodebotani.st!${format('resetAll')}\r\n
This is my personal portfolio site, as well as a terminal you can\r
${format('magentaText')}control some of my robotics projects${format('resetAll')} from!\r\n
Use the ${format('brightMagentaText')}'help'${format('resetAll')} command to see all available commands\r
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

