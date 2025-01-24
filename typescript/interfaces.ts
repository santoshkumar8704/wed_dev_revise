interface Person {
    names : string,
    age : number,
    height ? : number
}
interface Employee extends Person{
    employeeid : number,
    salary : number
}
interface Lead extends Employee {
    team : Employee[]
}
interface Manager extends Lead,Employee{
    sectionName : string
}

const employee1 : Employee = {
    names : "santosh",
    age : 20,
    employeeid : 9322,
    salary : 700000

}
const manager1 : Manager = {
    names : "RAMYASRI",
    age : 21,
    employeeid : 231103,
    salary : 90000000000,
    team : [employee1],
    sectionName : "MACHINE LEARNING"

}
console.log(manager1.team)