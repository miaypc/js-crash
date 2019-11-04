// Person = class {
// 	constructor(name) {
// 		console.log("Hi, It's me");
// 		this.name = name;
// 		this.partys = [];
		
// 	}
// 	invite(Person) {
// 		console.log(Person.name + "! Please come to my party, " + this.name);
// 	}
// 	come(party) {
// 		this.partys.push(party);
// 		party.members.push(this);	
// 	}
	
// }

// Party = class {
// 	constructor(name){
// 		this.name = name;
// 		this.members = [];
// 	}
// }

// person1 = new Person ('Mia');
// person2 = new Person ('Jenny');

// party1= new Party ('Mias Birthday Party');

// person1.invite(person2);
// person2.come(party1);





Person = class {
	constructor(name, totalplants){
		this.name = name
		this.totalplants = totalplants;
	}	
	buy(plant) {	
		console.log(this.name +", bought a new " + plant.name);
	    this.totalplants.push(plant);
	}
	give(person, plant) {
		console.log(this.name + " gave " + plant.name + " to " + person.name);
		this.totalplants.pop(plant);
		person.totalplants.push(plant);
	}
// Hash Map, Dictionary, Map
}


Plant = class {
    constructor(name){
        this.name = name;                    
    }
}


plant1 = new Plant ('Calathea');
plant2 = new Plant ('pilea');
plant3 = new Plant ('Monstera');


oya = new Person ('Oya', [plant1, plant2, plant3]);
varya = new Person ('Varya', [plant1]);
mia = new Person ('Mia',[plant3]);


varya.buy(plant2);
oya.give(varya, plant3);



//oya.giveToPeople([mia, varya], plant1)
//console.log("Oya", oya.totalplants)
//console.log("Varya", varya.totalplants)
//console.log("Mia", mia.totalplants)


Pet = class {
	constructor(name, type, color) {
		this.name = name;
        this.type = type;
		this.color = color;
		this.meals = [];
		
	}
	eat(meal) {
		this.meal = meal;
		this.meals.push(meal);
	}	
}

a = new Pet('A','dog','back and white');
b = new Pet('B', 'cat', 'orange');
c = new Pet('C', 'rabbit', 'white');


Meal = class {
	constructor(name) {
		this.name = name;
	}
}

meat = new Meal('Meat');
veggie = new Meal('Veggie');
fruit = new Meal('Fruit');

a.eat(meat);
b.eat(veggie);
c.eat(fruit);



Clean = class {
	constructor() {		
		this.aftershowers = [];
	}
	washAndDry(){
		this.aftershowers.forEach(inshower)
	}
}

inshower = Pet => console.log(takingshower);

bath = new Clean ('Bath');
bath.washAndDry()





