class Persons {
    protected nam : string
    private age:number = 3
    constructor (nam : string){
        this.nam = nam
        this.greet()
    }
    private greet (){
        console.log(this.nam,"  says hello.....")
    }
    getage () {
        console.log(this.age)
    }
    setage (newage:number) {
        this.age = newage
    }
}
class Human extends Persons {
    callMe(){
        console.log(this.nam)
    }
}
const person1 = new Persons("Ramya")
person1.getage()
person1.setage(4)
person1.getage()
const human1 = new Human("santosh")
human1.callMe()

