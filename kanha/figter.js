function myFunction(hello) {
    return(hello);
}
console.log(myFunction("Hello World!"));
//addition of two numbers
function addition(a, b) {
    return(a + b);
}
console.log(addition(3,2));
// less than or equal to zero
function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));


// same number

function isSameNum(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}
console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, "2"));

// less than 100

function lessThan100(a, b) {
    if (a + b < 100) {
        return true;
    } else {
        return false;
    }
}
console.log (lessThan100(22, 15));
console.log (lessThan100(83, 34));
console.log (lessThan100(3, 77));

// take an array of two numbers and return min and max

function minMax(arr) {
    return [Math.min(...arr),
        Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5]));

// create a function that accepts date and return true or false
function timeForMilkAndCookies(date) {
    if (date.getMonth() === 11 && date.getDate() === 24) {
        let Decamber=11;
        return true;
    } else {
        return false;
    }
}
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));

//   return true or false if the first array can be nested inside the second array
function canNest(arr1, arr2) {
    if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2) ) {
        return true;
    } else {
        return false;
    }
}
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));

// create a function that calculate the number

function calC(n){
    return n*n;

}
console.log(calC(2));
// create a function that return the drink object

function sortedDrinkByPrice(drinks){
    return drinks.sort((a,b)=>a.price-b.price);
}
console.log(sortedDrinkByPrice([
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]));

// largest swap number 

function largestSwap(num) {
    let str = num.toString();
    return str[0] >= str[1];
}
console.log(largestSwap(27));
console.log(largestSwap(43));

// create a function that take two numbers and a mathematical operator and return the result

function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator==="-"){
        return num1-num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    } else if (operator === "%") {
        return num1 % num2;
    } else {
        return "unknown value";
    }
}
console.log(calculator(2, "+", 2));
console.log(calculator(2, "*", 2));
console.log(calculator(4, "/", 2));

// create a function that's fetch data
 
    


