const date1 = new Date();  //2024-05-19T19:51:09.286Z
const date2 = date1.toString();  //Mon May 20 2024 01:22:17 GMT+0530 (India Standard Time)
const date3 = date1.toDateString()  //Mon May 20 2024
const date4 = date1.toTimeString()  //01:26:52 GMT+0530 (India Standard Time)
const date5 = date1.toUTCString();  //Sun, 19 May 2024 19:58:06 GMT
const date6 = date1.toLocaleString(); //5/20/2024, 1:30:13 AM
const date7 = date1.toLocaleDateString();  //5/20/2024
const date8 = date1.toLocaleTimeString();   //1:30:13 AM

const date9 = date1.getFullYear();    //2024
const date10 = date1.getMonth();      //4
const date11 = date1.getDate();       //20

const date12 = date1.getHours();   //1
const date13 = date1.getMinutes();  //37
const date14 = date1.getSeconds();  //8

//Calculating elapsed time:-
// const start = Date.now();
// setTimeout(()=>{
//     console.log("Doing something!")
//     const end = Date.now();
//     const elapsed = end - start;
//     console.log("Inside callback: ", elapsed)
// },10000)

//Calculation day difference:-

const date15 = new Date("5/10/2024");
const date16 = new Date("5/20/2024");

diff_in_time = date16-date15;
diff_in_days = diff_in_time / (1000 * 60 * 60 * 24);
//1000 -> ms in a sec
//60 -> sec in a min
//60 -> min in an hour
//24 -> hours in a day

console.log(diff_in_days)
