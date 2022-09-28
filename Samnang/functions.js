// let name="Samang";

// function showmessage(){
//     let message =' Hello, '+ name;
//     console.log(message);
    
// }
// showmessage();

// let name="Samnang";

// function showmessage(){
//     let name="Vattanak";
//     let message="Hello "+name;
//     console.log(message);
// }

// console.log(name)

// showmessage();

// console.log(name)

// function sum(a,b){
//     return a+b;
// }

// let result = sum(1,2);
// console.log(result);

// function checkage(age){

//     if(age >=18){
//         return true;
//     } else{
//         return confirm('Do you have a permssion from your parents?');
//     }

// }

// let age=prompt('How old are you',18);

// if(checkage(age) ){
//     alert("Access granted ");
// }else{
//     alert("Access denid");
// }

// function checkage(age){
//     if(age>18){
//         return true;
//     }else{
//         return confirm("Do you have permession from your parents ?");
//     }
// }

// let age=prompt('How old are you ');

// if(checkage(age)){
//     alert('Access granted');
// } else {
//     alert('Access denid');
// }


// function multiplyNumbers(Num1,Num2,Num3){

//     return Num1*Num2*Num3;
// }

// let result=multiplyNumbers(20,30,40);

// console.log(result);

// let multiplyNumbers2 = function(Num1,Num2,Num3){
//     return Num1*Num2*Num3;
// }
// let result2=multiplyNumbers(20,30,40);
// console.log(result2);


//Constructor functions
// function Person(firstname,lastname,dob){
//     this.firstname=firstname;
//     this.lastname= lastname;
//     this.dob =new Date(dob);
    // this.getBirthYear =function(){
    //     return this.dob.getFullYear();
    // }
    // this.getFullName =function(){
    //     return`${this.firstname} ${this.lastname}`;
    // }   

// }

// Person.prototype.getBirthYear=function (){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName=function(){
//     return`${this.firstname} ${this.lastname}`;
// }

//class
class Person{
    constructor(firstname,lastname,dob){
        this.lastname=lastname;
        this.firstname=firstname;
        this.dob=new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return`${this.firstname} ${this.lastname}`;
    }
}
//Instantiate object
let person1= new Person('Samnang','Ma','01-01-2000');
let person2= new Person('John','Smith','2-2-2000');

// console.log(person1.dob.getFullYear());// output only the years
// console.log(person1.dob);// out put the date 

console.log(person2.getBirthYear());
console.log(person2.getFullName());

