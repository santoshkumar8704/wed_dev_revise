function addition (num1:number,num2:number,num3?:number):number{
    if (num3){
        return num1+num2+num3
    }
    else{
        return num1+num2
    }
}
console.log(addition(1,2))
console.log(addition(1,2,3))