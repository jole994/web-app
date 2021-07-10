function Seat(number,category){
    category=category || "e";
    number=number || Math.floor( 91 * Math.random() + 10 );//or seal 89
    if( !number ){
        throw new Error("ERROR!You have to insert number!")
    }
    if(category !== 'e' && category !=='b'){
        throw new Error("ERROR!You have to insert 'b' or 'e' category!")
    }
    this.number=number;
    this.category=category;
    this.getData=function(){
        return this.number + ", " + this.category;
    }
}
module.exports = Seat;
