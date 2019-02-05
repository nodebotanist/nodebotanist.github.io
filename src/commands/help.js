const format = require('../format')

let run = (args) => {
  const commands = require('./map')
  let listOfCommands = Object.keys(commands)
  console.log('test', listOfCommands)
  let helpCommand = ''
  
  if(args._.length > 1) {
    helpCommand = args[0]
  }

  if(helpCommand && helpCommand !== 'help') {
    if(listOfCommands.indexOf(helpCommand) !== -1){
      return commands[helpCommand].helpText
    } else {
      return `${format.addEscapeCharacter('blueText')}Command ${helpCommand} not found!${format.addEscapeCharacter('resetAll')}`
    }
  } else {
    return `${format.newLine()}The available commands are:${format.newLine()}${listOfCommands.map(command => `\b\t${command}${format.newLine()}`).join('')}`
  }
}   

let helpText = ``

module.exports = {
  run,
  helpText
}