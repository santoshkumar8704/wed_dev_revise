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

function nameMerging(first : string,last : string,middle ? : string){
    if(middle){
        return first + " " + middle + " " + last
    }
    return first + " " + last
}
function callName ( func : (f:string,l:string,m?:string) => string,param1:string,param2:string,param3?:string):void{
    if(param3){
        console.log(`hello `,func(param1,param2,param3))
    }
    else{
        console.log(`hello `,func(param1,param2))
    }
}
callName(nameMerging,"TEJA","SRI","RAMYA")
callName(nameMerging,"TEJA","RAMYA")

// restoperator
function calval(...values: number[]):number{
    return 2

}
calval(1)
calval(1,2)
calval(1,2,3)

// overloading
function getItemLength(name:string):number;
function getItemLength(names:string[]):number;
function getItemLength(nameornames:unknown):number{
    if (typeof nameornames == "string"){
        return nameornames.length
    }
    else if (Array.isArray(nameornames)){
        return nameornames.length
    }
    return 0
}
