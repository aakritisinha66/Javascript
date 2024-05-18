//Asynchronous programming
// console.log("Check 1")
// console.log("Check 2")
// setTimeout(()=>{
//     console.log("Check 3")
// })
// console.log("Check 4")
// console.log("Check 5")

//Callback Hell
// function getData(data, callback) {
//     setTimeout(() => {
//         console.log(data)
//         if (callback) {
//             callback();
//         }
//     }, 2000)
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// })

//Promise Chaining 
// function getData(data){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log(data);
//             resolve("success");
//         }, 2000);
//     })
// }

// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3);
// }).then((res)=>{
//     console.log(res)
// })

//Promise Chaining Another Example
// function asyncFunction1() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Data 1 fetched!");
//             resolve("success1");
//         }, 2000);
//     })
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Data 2 fetched!");
//             resolve("success2");
//         }, 4000);
//     })
// }

// asyncFunction1().then((result)=>{
//     console.log(result)
//     asyncFunction2().then((result)=>{
//         console.log(result)
//     })
// });
// //OR
// asyncFunction1().then((res)=>{
//     return asyncFunction2();
// }).then((res)=>{
//     console.log(res)
// })

//Async Await Function
function getData(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve(200);
        }, 2000);
    })
}

async function getAllData(){
    console.log("Fetching data 1")
    await getData(1);
    console.log("Fetching data 2")
    await getData(2);
    console.log("Fetching data 3")
    await getData(3);
}
// getAllData();

//IIFE:- self executing anonymous function
(async function (){
    console.log("IIFE data 1")
    await getData(1);
    console.log("IIFE data 2")
    await getData(2);
    console.log("IIFE data 3")
    await getData(3);
})();

