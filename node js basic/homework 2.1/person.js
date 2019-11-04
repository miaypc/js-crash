const Chalk = require('chalk')

module.exports = class Person {
    constructor(name) {
        this.name = name;
        // this.partys = [];
        
    }
    invite(Person) {
        console.log(Chalk.magenta.bgWhite(Person.name + "! Please come to my party, " + this.name));
    }
    come(party) {
        // this.partys.push(party);
        party.gasts.push(this);	
    }
    
}