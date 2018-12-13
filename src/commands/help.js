const formatting = require('../formatting')

let helpCommand = (...args) => {
  // TODO: Add help for each command if command is passed
  let commandList = args[args.length-1]

  return `\r\nThe available commands are:\r\n
${commandList.map(command => `\b\t${command}\n\r`).join('')}`
}

module.exports = helpCommand