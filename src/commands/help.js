const format = require('../format')

let run = (...args) => {
  // TODO: Add help for each command if command is passed
  let commandList = args[args.length-1]

  return `${format.newLine()}The available commands are:${format.newLine()}${commandList.map(command => `\b\t${command}${format.newLine()}`).join('')}`
}

let helpText = ``

module.exports = {
  run,
  helpText
}