// Return "Hello World" form hello functions

// function hello(){
//     console.log('Hello World')
// }
// hello();

// Create a functions that two numbers as arguments and returns their sum.

// function addition(a,b){
    
//     console.log(a+b);
// }

// addition(2,3);

// create a functions that takes a number as its only argument and returns true if
//it's less than or eual to zero, otherwise return false.

// function lessThanOrEqualToZero(Num1){
//     if (Num1 <= 0 ){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(lessThanOrEqualToZero(5))
// console.log(lessThanOrEqualToZero(0))
// console.log(lessThanOrEqualToZero(-2))


//Create a function that returns true when num1 is equel to num2; otherwise return false
// function isSameNum(num1, num2) {
// 	if ( num1 === num2 )  {
// 		return true;      
//      } else {
//    return false;   
//     }
// }

// console.log(isSameNum(4,8))
// console.log(isSameNum(2,2))
// console.log(isSameNum(2,"2"))


// Create a function that takes a number as an argument. Add up all the numbers from
// 1 to the number you passed to the function.
//Ex if the input is 4 then your function should return 10 because 1+2+3+4=10

// function addup(num){
//     return num ===1 ? 1 : num + addup(num -1);
// }

// console.log(addup(4));

//Given two numbers, return true if the sum of the both numbers is less than 100. otherwise return false.

// function lessThan100(a,b){
//     let lessThan100 = a+b;
//     if(lessThan100 >100) {
//         return false ;
//     } else {
//         return true;
//     }
// }

// console.log(lessThan100(22,15))
// console.log(lessThan100(83,34))
// console.log(lessThan100(3,77))



//Create a function that takes an array of the numbers and return numbers and return both the minium and maximum numbers, in order.

// function MinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];
  
//     for (let curr of arr) {
//       if (curr > max) {
//         max = curr;
//       }
  
//       if (curr < min) {
//         min = curr;
//       }
//     }
  
//     return {
//       min,
//       max
//     };
//   }
// console.log(MinMax([1,2,3,4,5]))
// Create a function that calculates the number N*N 

// function calc(N){
//     return N*N;
// }
// console.log(calc(2))


// You will be given an array of drinks, with each drink being an object with two properties: name and price. 
//Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
//Assume that the following array of the drink objects needs to be sored: 
//   drink=[
//     {name : "lemonade",price: 50},
//     {name : "lime",price:10}
//   ]
// let drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10},
//     {name: "coffee", price: 5},
//     {name: "tea", price: 5},
//     {name: "Chocolate", price: 75},
//     {name: "milk", price: 25},
//   ];
  
// console.log(drinks.sort((a, b) => (a.name > b.name) ? 1 : -1));

//Write a functions that takes a two-digit number and determines if it's tje largest of two possible digit swaps.
//to illustrate: largestSwap(27) ->false , largestSwap(43)-> true
//if 27 is our input, we should return falase because swapping the digits gives us 72, and 72> 27 . On the other hand,
//swapping 43 gives us 34, and 43 > 34.

// function largestSwap(num){
//     num= num.toString();

//     if(num <0 ){
//         return num[2] >= num [1]; // number is negative 
//     }
//     return num[0] >= num[1];
// }
// console.log(largestSwap(27))
// console.log(largestSwap(43))


//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a Function that accepts a Date object
// and returns true if it's Christmas Eve(December 24th) and false other wise. keep in mind JavaScript's Date month is 0 based, meaning December is the 11th
//month while January is 0.
//Hint http://adripofjavascript.com/blog/drips/checking-date-equality-in-javascript.html

// let christmas = (year, month, date) => {
//     if (month === 11 && date === 24 && year > 0) {
//       return true;
//     } else return false;
//   };
  
//   console.log(christmas(2013, 11, 24));
//   console.log(christmas(2013, 0, 24));
//   console.log(christmas(3000, 11, 24));

//Create a function that return true if the first array can be nested inside the second and false otherwise.
//arr1 can be nested inside arr2 if:
//arr1's min is greater than arr2's min.
//arr1's max is less than arr2's max.

// function canNest(arr1, arr2) {
//     return ( 
//         Math.min(...arr1)>Math.min(...arr2) && 
//         Math.max(...arr1)<Math.max(...arr2)
//         );
// }

// console.log(canNest([1,2,3,4],[0,6]))
// console.log(canNest([3,1],[4,0]))
// console.log(canNest([9,9,8],[8,9]))
// console.log(canNest([1,2,3,4],[2,3]))

//Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.



// let calculator = (a, operation, b) => {
//   if (operation === '+') return a + b;
//   if (operation === '-') return a - b;
//   if (operation === '*') return a * b;
//   if (operation === '/') return b === 0 ? "Can't divide by 0!" : a / b;
// }

// console.log(calculator(2,"*",2))
// console.log(calculator(2,"+",2))
// console.log(calculator(4,"/",2))

//Create a function that's fetch data from the api 'https://jasonplaceholder.typicode.com/todos/1'
//Hint using async/await &fetch api
async function FetchData() {
    await fetch('https://jsonplaceholder.typicode.com/todoss/1')
    .then(res => 
        res.json()
    )
    .then(json => console.log(json))
    .catch(err => {
        console.log('err', err)
    })
}

FetchData();