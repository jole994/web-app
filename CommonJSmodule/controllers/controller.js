let Person=require("../entities/person");
let Seat=require("../entities/seat");
let Passenger=require("../entities/passenger")
let Flight=require("../entities/flight")
function createPassenger(firstName, lastaName, seatnumber, category){
    var p=new Person(firstName,lastaName);
    var s=new Seat(seatnumber,category);
    return new Passenger(p,s);
}
function createFlight(relation,date){
    return new Flight(relation,date);
}
module.exports = {createPassenger, createFlight};