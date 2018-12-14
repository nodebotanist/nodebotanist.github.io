const format = require('../format')

let run = (...args) => {
  return `${format.addEscapeCharacter('yellowText')}${format.newLine()}Kas has been a web developer for more than ten years, and a${format.newLine()}Developer Advocate for four years. They are also a part-time${format.newLine()}Electrical Engineering student and a published author on books${format.newLine()}about running Node.JS on hardware.${format.addEscapeCharacter('resetAll')}${format.newLine()}`
}

let helpText = ``

module.exports = {
  run,
  helpText
}