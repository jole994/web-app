
function AirportFunction(){
    let Person=require("./entities/person");
    let Seat=require("./entities/seat");
    let Passenger=require("./entities/passenger")
    let Flight=require("./entities/flight")
    let Airport=require("./entities/airport")
	const controller = require('./controllers/controller');
	let createPassenger=controller.createPassenger;
	let createFlight=controller.createFlight;


    try {
		var nikolaTesla = new Airport()
		var belgradeNY = createFlight("Belgrade - New York", "Oct 25 2017")
		var barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017")
		var passenger1 = createPassenger("John", "Snow", 1, "b")
		var passenger2 = createPassenger("Cersei", "Lannister", 2, "b")
		var passenger3 = createPassenger("Daenerys", "Targaryen", 14)
		var passenger4 = createPassenger("Tyrion", "Lannister")
		belgradeNY.addPassenger(passenger1)
		belgradeNY.addPassenger(passenger2)
		barcelonaBelgrade.addPassenger(passenger3)
		barcelonaBelgrade.addPassenger(passenger4)
		nikolaTesla.addFlight(belgradeNY)
		nikolaTesla.addFlight(barcelonaBelgrade)
		console.log(nikolaTesla.getData());
	} catch (error) {
		console.log('Error message:' + error.message);
	}

};

AirportFunction();





