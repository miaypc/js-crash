const Person = require('./person')
const Meetup = require('./meetup')
const Database = require('./database')
const loadedFile = Database.load('meetup.json')


const wtmb = new Meetup(loadedFile.name,loadedFile.attendees)
const ooo = new Person('OOO', 20)
ooo.attend(wtmb)


wtmb.printAttendeeNames()