//functions parameter
function square(num:number){
    return num * num;
}
// function greet(person: string){
//     return `Hi there, ${person}!`
// }

square(9)
// greet("Samang")

// More on Functions

const doSomething=(person:string,age:number, isfunny:boolean) =>{};

doSomething("ChickenFace",87,true)

// Working with Default Parameters
function greet(person: string = "stranger"){
    return `Hi there, ${person}!`
}

greet("Samang")

//return type annotations

const addNums = ( x:number, y: number): number =>{
    return x + y;
}

addNums(5,5);