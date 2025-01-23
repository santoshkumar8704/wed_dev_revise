let num : number = 1
num = 2
// num = "ramya"
let person : string = "ramya"
person = "ramuu"
// person = 1
let n : null = null
// n = "sant"
let u : undefined 
// u = "sky"
let a : any 
a = 1
a = true 
a = "hi"
//arrays 
let arr : number[] = [1,2,3]
let arr2 : number[][] = [[1,2,3],[2]]
// tuples
let cordinates : [number,number] = [90,90]
// literals 
let angrybird : "ramya" | "ramuu" | "ramyasri"
angrybird = "ramuu"
// angrybird = "santosh"
// enums 
enum directions {
    UP = 1,
    DOWN = 2,
    LEFT = 3,
    RIGHT= 4
}
const newdirection = 3
console.log(newdirection === directions.LEFT)
// unknown 
let nu : unknown = 1
// nu + 1
// type assertion
if (typeof nu == 'number'){
    nu += 1
}
console.log(nu)
// ? and bang(!)
const ar = [{name:"ramya"},{name:"santosh"}]
// let ele = ar.pop().name
let ele = ar.pop()?.name
console.log(ar)
console.log(ele)
const emptyarr :any = []
let element = emptyarr.pop()?.name
// let element2 = emptyarr.pop()!.name this bang gives error
console.log(element) // undefined