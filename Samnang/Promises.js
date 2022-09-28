// let p = new Promise((resolve,reject) => { 
//     let a =1+1
//     if( a == 2) {
//         resolve('Success')
//     }else{
//         reject('Failed')
//     }
// })

// p.then((message)=>{
//     console.log('This is in the then '+ meesage)

// }).catch((message)=>{
//     console.log('This is in the catch'+message)
// })


// async function add(a,b){
//     return a+b;
// }

// add(1,2).then((data) =>{
//     console.log(data);
// });

// function wait(time) {
//     return new Promise((resolve) =>{
//         setTimeout(()=> {
//             resolve();
//         },time);
//     });
// }


// async function calc(){
//     console.log("Before Wait");
//     await wait(2000);
//     console.log("after wait");
//     await wait(2000);

//     let sum = await add(1,2);

//     console.log("Sum",sum);
// }
// calc();

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