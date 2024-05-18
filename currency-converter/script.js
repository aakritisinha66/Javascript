const URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const from = document.querySelector(".from select")
const to = document.querySelector(".to select")

// const rate = document.querySelector("form p")
const exchange_rate = document.querySelector(".exchange_rate")

for (let select of dropdowns) {
    for (let code in countryList) {
        // console.log(code, countryList[code]);
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.name === "from" && code === "USD") {
            newOption.selected = "selected";
        }
        else if(select.name === "to" && code === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (event)=>{
        updateFlag(event.target);
    })
}

const updateFlag = async (element) =>{
    let currency = element.value;
    let country = countryList[currency];
    console.log(currency, country)
    let newSrc = `https://flagsapi.com/${country}/flat/64.png`;
    let img = element.parentElement.querySelector("img");

    // img.src = newSrc
    img.setAttribute("src",newSrc);
    const rate = await callAPI();
    console.log(`1 ${from.value} = ${rate} ${to.value}`)
    exchange_rate.innerText = `1${from.value} = ${rate}${to.value}`;
}

const callAPI = async () => {
    const CURR_URL = `${URL}/${from.value.toLowerCase()}.json`;
    let response = await fetch(CURR_URL);
    // console.log(response)
    let json_response = await response.json();
    const exchange_rate = json_response[from.value.toLowerCase()][to.value.toLowerCase()];
    return exchange_rate;
}

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let amount = document.querySelector(".amount input");
    // console.log("Amount: ", amount.value)
    if(amount === "" || amount < 0){
        amount = 1;
        amount.value = "1";
    }
    const rate = await callAPI();

    let final = amount.value * rate

    console.log(`${amount.value} ${from.value} = ${final} ${to.value}`)
    exchange_rate.innerText = `${amount.value} ${from.value} = ${final} ${to.value}`;

})