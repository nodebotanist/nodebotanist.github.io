(function() {

  let printHelp = () => {

  }

  commands = {
    'help': printHelp
  }

  function runCommand(args) {
    console.log(args)
    let command = args[0] 
    let arguments = undefined
    if (args.length > 1) {
      arguments = args.slice(1, command.length)
    }
  }

  window.runCommand = runCommand
})()