module.exports = class Party {
	constructor(name) {
		this.name = name;
		this.gasts = [];
    }
    prepareFoodForGasts() {
        this.gasts.forEach(prepareFood)
    }
}