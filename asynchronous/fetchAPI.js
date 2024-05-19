const URL = "http://localhost:8082/api/books";

//Callback Chaining
// function getData(){
//     fetch(URL).then((result)=>{
//         return result.json();
//     }).then((result)=>{
//         console.log(result)
//     })
// }

//Async Await
const getData = async () => {
    let response = await fetch(URL);              //1st promise
    let response_data = await response.json();    //2nd response
    console.log(response_data)
}
getData()