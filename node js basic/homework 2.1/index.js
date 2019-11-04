const Person = require('./person')
const Party = require('./party')
const Chalk = require('chalk')
const Database = require('./database')

prepareFood = person => console.log(Chalk.cyan(person.name))

const mia = new Person('Mia')
const jenny = new Person('Jenny')



mia.invite(jenny)

const bdp = new Party('Birthday Party')
jenny.come(bdp)
mia.come(bdp)

bdp.prepareFoodForGasts()

Database.save('party.json', bdp)
Database.save('person.json', jenny)

const loadedFile = Database.load('person.json')
console.log(loadedFile.name)