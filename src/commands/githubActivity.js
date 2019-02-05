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
    return `${format.newLine()}Recent GitHub Activity for nodebotanist${format.newLine()}${result.data.map(action => `${action.created_at}: ${action.type}`).join(format.newLine())}`
  },
  helpText: `shows latest GitHub Activity`
}