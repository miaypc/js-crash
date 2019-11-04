const boxen = require('boxen')

module.exports = class Person {
	constructor(name, totalplants){
		this.name = name
        this.totalplants = [];
	}	
	buy(plant) {	
		console.log(boxen(this.name +", bought a new " + plant.name, {padding: 1}));
	    this.totalplants.push(plant);
	}
}
