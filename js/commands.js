(function() {

  let printHelp = (...args) => {
    term.write('HELP')
  }

  commands = {
    'help': printHelp
  }

  function runCommand(args) {
    let command = args[0] 
    let arguments = undefined
    let commandList = Object.keys(commands)

    if (args.length > 1) {
      arguments = args.slice(1, command.length)
    }

    if (commandList.indexOf(command) === -1) {
      term.write('\r\nCommand not found!')
    } else {
      commands[command].apply(this, arguments)
    }
  }

  window.runCommand = runCommand
})()