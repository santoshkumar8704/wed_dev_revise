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

//abstract classes
abstract class Animal{
    static instanceCount = 0
    abstract makeSound(duration:number):void 
    constructor () {
        Animal.instanceCount++; 

    }
    move(duration:number){
        console.log("MOving along....")
        this.makeSound(duration)
    }
}
class Dog extends Animal {
    makeSound(duration: number): void {
        const str = "BOW! BOW!...."
        console.log(str.repeat(duration))
    }
}
class Cat extends Animal {
    makeSound(duration: number): void {
        const str = "Meow.... Meow... "
        console.log(str.repeat(duration))
    }
}
//const newAnimal = new Animal()
const Simba = new Dog()
Simba.move(4)
console.log(Animal.instanceCount)
const Buddy = new Dog()
console.log(Animal.instanceCount)