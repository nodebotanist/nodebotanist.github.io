const format = require('../formatting')

let whoAreThey = (...args) => {
  return `${format('yellowText')}
Kas has been a web developer for more than ten years, and a\r
Developer Advocate for four years. They are also a part-time\r
Electrical Engineering student and a published author on books\r
about running Node.JS on hardware.${format('resetAll')}\n`
}

module.exports = whoAreThey