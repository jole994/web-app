let Flight=require("./flight")
function Airport(listOfFlights){
    this.name="Nikola Tesla";
    this.listOfFlights=[];
    this.addFlight=function(flight){
        if( !flight || !(flight instanceof Flight )){
            throw Error("you have to insert valid data")
        }
        this.listOfFlights.push(flight);
    }
    this.getData=function AirportGetData(){
        var count=0;
        this.listOfFlights.forEach( function(element){
            count += element.listOfPassengers.length;
        })
        var result= this.name + ", total passengers:" + count + "\n";
        this.listOfFlights.forEach(  function(elem){
            result+=elem.getData() + "\n";
        } )
        return result;
    }
}
module.exports = Airport;