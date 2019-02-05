const Terminal = require('xterm').Terminal
const fit = require('xterm/lib/addons/fit/fit')
const WebfontLoader = require('xterm-webfont')
const BrowserTerminal = require('xterm-browser').Terminal

const theme = require('./theme')

const helpCommand = require('./commands/help')

let currentLine = ''
let currentLineLength = 0

Terminal.applyAddon(fit)
Terminal.applyAddon(WebfontLoader)

let terminalOptions = {
  theme,
  fontFamily: "Share Tech Mono"
}

console.log(BrowserTerminal)

let term = new Terminal(terminalOptions)
let terminal = new BrowserTerminal(term)
term.loadWebfontAndOpen(document.getElementById('#terminal'))
terminal.setup()

// term.fit()

// Intro time!
term.write(`${terminal.format.newLine()}${terminal.format.text('cyan')}     *     ${terminal.format.newLine()}     |     ${terminal.format.newLine()}***********${terminal.format.newLine()}**       **${terminal.format.newLine()}**  ^ ^  **${terminal.format.newLine()}**   o   **${terminal.format.newLine()}**       **${terminal.format.newLine()}***********${terminal.format.newLine()}${terminal.format.reset('all')}Welcome to ${terminal.format.brightText('green')}https://nodebotani.st!${terminal.format.reset('all')}${terminal.format.newLine()}This is my personal portfolio site, as well as a terminal you can${terminal.format.newLine()}${terminal.format.text('magenta')}control some of my robotics projects${terminal.format.reset('all')} from!${terminal.format.newLine()}Use the ${terminal.format.brightText('magenta')}'help'${terminal.format.reset('all')} command to see all available commands ${terminal.format.newLine()} `)

term.prompt()
// end Intro

term._core.register(term.addDisposableListener('paste', (data, ev) => {
  term.write(data)
}))

terminal.dispatcher.on('help', (args) => {
  terminal.terminal.write(helpCommand.run(args))
});

