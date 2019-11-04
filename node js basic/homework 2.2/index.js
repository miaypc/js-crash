const Person = require('./person')
const Plant = require('./plant')
const Database = require('./database')

const mia = new Person ('Mia')
const varya = new Person ('Varya')

const calathea = new Plant ('Calathea')
const monstera = new Plant ('Monstera')

varya.buy(calathea)

Database.save('plant.json',calathea)

const loadedFile = Database.load('plant.json')
console.log(loadedFile.name)