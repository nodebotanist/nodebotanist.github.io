const format = require('./formatting')

let help = (...args) => {
  return `HELP`
}

commands = {
  help
}

function runCommand(args) {
  let command = args[0] 
  let arguments = undefined
  let commandList = Object.keys(commands)

  if (args.length > 1) {
    arguments = args.slice(1, command.length)
  }

  if (commandList.indexOf(command) === -1) {
    return `${format('blueText')}Command ${command} not found!${format('resetAll')}`
  } else {
    return commands[command].apply(this, arguments)
  }
}

module.exports = {
  runCommand
}