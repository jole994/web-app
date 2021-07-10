function Person(name,surname){
    if( !name || !surname){
        throw new Error("ERROR!You have to insert name and surname!")
    }
    this.name=name;
    this.surname=surname;
    this.getData=function(){
        return this.name + " " + this.surname;
    }
}



module.exports= Person;

