
const Chalk = require('chalk')

module.exports = class Meetup {
  constructor(name, attendees = []) {
    this.name = name
    this.attendees = attendees
  }
  printAttendeeNames() {
    this.attendees.forEach(printName)
  }
}

const printName = person => console.log(Chalk.bgGreen(person.name))