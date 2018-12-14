const format = require('./format')
const commands = require('./commands/map.js')

function run(args) {
  let command = args[0] 
  let arguments = []
  let commandList = Object.keys(commands)

  if (args.length > 1) {
    arguments = args.slice(1, command.length)
  }

  if (commandList.indexOf(command) === -1) {
    return `${format('blueText')}Command ${command} not found!${format('resetAll')}`
  } else {
    console.log(commands)
    arguments.push(commandList)
    return commands[command].run.apply(this, arguments)
  }
}

module.exports = {
  run
}