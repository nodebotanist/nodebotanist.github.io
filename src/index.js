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

console.log(theme)
let terminalOptions = {
  theme,
  fontFamily: "Fira Mono",
  fontWeight: 400,
  cols: 120,
  textarea: '#input'
}



let term = new Terminal(terminalOptions)
let fitAddon = new fit()

let terminal = new BrowserTerminal(term)

terminal.open(document.getElementById('#terminal'))
terminal.loadAddon(fitAddon)

fitAddon.fit()

// Intro time!
terminal.write(`🤖${terminal.format.newLine()}${terminal.format.reset('all')}Welcome to ${terminal.format.brightText('green')}https://nodebotani.st!${terminal.format.reset('all')}${terminal.format.newLine()}This is my personal portfolio site, as well as a terminal you can ${terminal.format.text('magenta')}interact with${terminal.format.reset('all')}${terminal.format.newLine()}Use the ${terminal.format.brightText('magenta')}'help'${terminal.format.reset('all')} command to see all available commands `)

terminal.prompt()
terminal.setup()
// end Intro

terminal.dispatcher.on('help', (args) => {
  terminal.write(helpCommand.run(args))
});

terminal.dispatcher.on('whoarethey', (args) => {
  terminal.write(whoAreTheyCommand.run())
})

terminal.dispatcher.on('githubActivity', async function() {
  terminal.write(await githubActivityCommand.run())
})