const Terminal = require('xterm').Terminal
const fit = require('xterm-addon-fit').FitAddon
const WebfontLoader = require('xterm-webfont')
const BrowserTerminal = require('xterm-browser').Terminal

const theme = require('./theme')

const helpCommand = require('./commands/help')
const whoAreTheyCommand = require('./commands/whoarethey')
const githubActivityCommand = require('./commands/githubActivity')

let currentLine = ''
let currentLineLength = 0


let terminalOptions = {
  theme,
  fontFamily: "Fira Mono",
  fontWeight: 400,
  cols: 120
}

console.log(BrowserTerminal)

let term = new Terminal(terminalOptions)
let fitAddon = new fit()
term.loadAddon(fitAddon)
// term.loadAddon(WebfontLoader)

let terminal = new BrowserTerminal(term)
term.open(document.getElementById('#terminal'))

fitAddon.fit()

// Intro time!
term.write(`${terminal.format.newLine()}${terminal.format.text('cyan')}     *     ${terminal.format.newLine()}     |     ${terminal.format.newLine()}***********${terminal.format.newLine()}**       **${terminal.format.newLine()}**  ^ ^  **${terminal.format.newLine()}**   o   **${terminal.format.newLine()}**       **${terminal.format.newLine()}***********${terminal.format.newLine()}${terminal.format.reset('all')}Welcome to ${terminal.format.brightText('green')}https://nodebotani.st!${terminal.format.reset('all')}${terminal.format.newLine()}This is my personal portfolio site, as well as a terminal you can${terminal.format.newLine()}${terminal.format.text('magenta')}control some of my robotics projects${terminal.format.reset('all')} from!${terminal.format.newLine()}Use the ${terminal.format.brightText('magenta')}'help'${terminal.format.reset('all')} command to see all available commands ${terminal.format.newLine()} `)

term.prompt()
// end Intro

// term._core.register(term.addDisposableListener('paste', (data, ev) => {
//   term.write(data)
// }))

terminal.dispatcher.on('help', (args) => {
  terminal.terminal.write(helpCommand.run(args))
});

terminal.dispatcher.on('whoarethey', (args) => {
  terminal.terminal.write(whoAreTheyCommand.run())
})

terminal.dispatcher.on('githubActivity', async function() {
  terminal.terminal.write(await githubActivityCommand.run())
})