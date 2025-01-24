class Persons {
    protected nam : string
    constructor (nam : string){
        this.nam = nam
        this.greet()
    }
    private greet (){
        console.log(this.nam,"  says hello.....")
    }
}
class Human extends Persons {
    callMe(){
        console.log(this.nam)
    }
}
const person1 = new Persons("Ramya")
const human1 = new Human("santosh")
human1.callMe()
