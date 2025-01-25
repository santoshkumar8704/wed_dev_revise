let arr = [1,2,3,4]
//accesing
console.log(arr[1])
//adding an element to the array
arr[4] = 5
console.log(arr)
arr.push(6)
console.log(arr)
arr.unshift(0)
console.log(arr)
// removing an element from an array
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
// splice takes the start index and one more arg which is about how many elements that we want to delete
arr.splice(3,1)
console.log(arr)
arr.splice(1,2)
console.log(arr)