const helpCommand = require('./help')
const whoAreTheyCommand = require('./whoarethey')
const githubActivityCommand = require('./githubActivity')

module.exports = {
  help: helpCommand,
  whoarethey: whoAreTheyCommand,
  githubActivity: githubActivityCommand
}