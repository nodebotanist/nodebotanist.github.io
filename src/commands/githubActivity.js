const Octokit = require('@octokit/rest')
const format = require('../format')

const octokit = new Octokit()

module.exports = {
  run: async function() {
    const result = await octokit.activity.listPublicEventsForUser({
      username: "nodebotanist",
      per_page: 10,
      page: 1
    })
    console.log(result)
    let resultText = result.data.map((action) => {
      switch (action.type) {
        case "ForkEvent":
          return `🍴 Forked ${action.repo.name} at ${action.created_at}${format.newLine()}`
          break
        case "PushEvent":
          return `⏫ Pushed "${action.payload.commits[0].message}" to ${action.repo.name} at ${action.created_at}${format.newLine()}`
          break
        default: 
          return `${action.created_at}: ${action.type} on ${action.repo.name}${format.newLine()}`
      }
    })
    return `${format.newLine()}Recent GitHub Activity for nodebotanist:${format.newLine()}${resultText.join('')}`
  },
  helpText: `shows latest GitHub Activity`
}