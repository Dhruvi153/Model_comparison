//task 1 --> Variables and Data Types

var price = 100
let isPermanent = false
const play='volleyball'
console.log(play)
console.log(isPermanent)
console.log(price)
document.write(price)
document.write(isPermanent)
document.write(play)



//task 2 --> Operators and Expressions

let a =10
let b=20

function print(x,y){
    document.write(x+y)
    document.write(x*y)
    document.write(x/y)
    document.write(x-y)
}

print(a,b)

//task 3 --> Control Flow

let age= prompt("enter your age")
if(age<18){
    console.log("You are a minor.")
}
else if(age>18 && age<65){
    console.log("You are an adult.")
}
else if(age>65){
    console.log("You are a senior citizen.")
}


//task 4 --> Functions

// let salary=[10.20,30,40,50,60]
// function find(s){
//     console.log(Math.max(s))
// }

// find(salary)