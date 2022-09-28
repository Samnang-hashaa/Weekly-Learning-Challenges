//Asynchronous

// console.log(" I ")
// console.log(" eat ")

// setTimeout(() => {
//     console.log(" ice cream ")
// }, 5000);

// console.log(" with a ")
// console.log(" spoon ")

// function one(call_two){
//     console.log("step 1 ");
//     call_two();
// }
//  function two(){
//     console.log("step 2");
//  }

//  one(two);


//ice cream project 

//callbacks

// let stocks={
//     Fruit : ["Strawberry","grapes","banana","apple"],
//     liquid :["Water" ,"ice"],
//     holder :["cone","cup","sticks"],
//     toppings :["chocolate","peanuts"],
// };

// // console.log(stocks.Fruit[2]);

// function order (Fruit_name, call_production) {
//     setTimeout(()=>{
//         console.log(`${stocks.Fruit[Fruit_name]} was selected`)
//         call_production();
//      },2000);
    
// }

// let production=()=>{
//     setTimeout(()=>{
//         console.log("production has started");
//         setTimeout(()=>{
//             console.log ("the friut has been clops");
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added `);
//                 setTimeout(() => {
//                     console.log("the machine was started");
//                     setTimeout(() => {
//                         console.log(`ice cream was placed on ${stocks.holder[0]}`);
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was added as topping `);
//                             setTimeout(() => {
//                                 console.log("serve the ice cream")
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         },2000);
//     },0000);
// };
// order(2,production);

//Promises 

// let stocks={
//     Fruit : ["Strawberry","grapes","banana","apple"],
//     liquid :["Water" ,"ice"],
//     holder :["cone","cup","sticks"],
//     toppings :["chocolate","peanuts"],
// };

// let is_shop_open=true;

// let order=(time, work)=>{

//     return new Promise( (resolve,reject) =>{
//         if(is_shop_open){
//             setTimeout(() => {
//                 resolve(work);
//             }, time);
//         }
//         else {
//             reject(console.log("our shop is closed"))
//         }
//     }) 
// }
// order(2000, console.log(`${stocks.Fruit[0]} was slected`))

// Await
// let stocks={
//     Fruit : ["Strawberry","grapes","banana","apple"],
//     liquid :["Water" ,"ice"],
//     holder :["cone","cup","sticks"],
//     toppings :["chocolate","peanuts"],
// };

// let is_shop_open=true;

// let toppings_choice = () =>{
//     return new Promise ( (resolve, reject)=>{
//         setTimeout(() => {
//             resolve(
//                 console.log("Which topping would you love? ")    
//         )}, 3000);
//     })
// }

// async function kitchen(){
//     console.log(" A ")
//     console.log(" B ")
//     console.log(" C ")

//     await toppings_choice()

//     console.log(" D ")
//     console.log(" E ")
// }

// kitchen()

// console.log("doing the dishes ");
// console.log("cleaning the tables");
// console.log("taking others orders")

let stocks={
    Fruit : ["Strawberry","grapes","banana","apple"],
    liquid :["Water" ,"ice"],
    holder :["cone","cup","sticks"],
    toppings :["chocolate","peanuts"],
};

let is_shop_open=true;
function time(ms){
    return new Promise((resolve, reject) =>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        } else{
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen () {
    try{
        await time(2000)
        console.log(`${stocks.Fruit[0]}`);

        await time(1000)
        console.log("start the production");

        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added `);

        await time(1000)
        console.log("the machine was started");

        await time(2000)
        console.log(`ice cream was placed on ${stocks.holder[0]}`);

        await time(3000)
        console.log(`${stocks.toppings[0]} was added as topping `); 

        await time(2000)
        console.log("serve the ice cream")

    }
    catch(error){
        console.log("customer left" ,error)
    }
    finally{
        console.log("day ended, stop is closed")
    }
}

kitchen();