let arr1 = [10,6,7,8,90]
function sortAsc(arr){
    arr.sort((a,b) => {
        if (a===b) return 0
        if (a <b) return -1
        return 1
    })
    return arr
    
}
function sortDesc(arr){
    arr.sort((a,b) => {
        if (a===b) return 0
        if (a >b) return -1
        return 1
    })
    return arr
    
}

console.log(sortAsc(arr1))
console.log(sortDesc(arr1))