function User(username,age,salary) {
    this.username = username 
    this.age = age 
    this.salary = salary 
    return this 
}
// const user1 = User("santosh",20,40000)
// console.log(user1)
// const user2 = User("ramya",21,70000)
// console.log(user1)
const user1 = new User("santosh",20,40000)
const user2 = new User("ramya",21,90000)
console.log(user1)
console.log(user2)
console.log()