let Person=require("./person");
let Seat=require("./seat");

function Passenger(person,seat){
    if( !person || !(person instanceof Person) || !seat || !(seat instanceof Seat)){
        throw Error("invalid input")
    }
    this.person=person;
    this.seat=seat;
    this.getData=function (){
        return seat.getData().toUpperCase() + ", "+ person.getData();
    }       
}
module.exports = Passenger;