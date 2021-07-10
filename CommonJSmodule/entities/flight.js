let Passenger=require("./passenger")
function Flight(relation,date){
    if( !relation || !date){
        throw new Error("ERROR!You have to insert relation and date!")
    }
    this.relation=relation;
    this.date=new Date(date);
    this.listOfPassengers=[];
    this.addPassenger=function(passenger){
        if( !passenger || !(passenger instanceof Passenger) ){
            throw Error("invalid input")
        }
        this.listOfPassengers.push(passenger);
    }
    this.getData=function(){
        var day=this.date.getDate();
        var month=this.date.getMonth() + 1;
        var year=this.date.getFullYear();
        var result= "\t" + day + "." + month + "." + year + "," + relation + "\n";
        this.listOfPassengers.forEach(  function(elem){
            result +="\t\t" + elem.getData() + "\n";
        })
        return result;
    }
}
module.exports = Flight;