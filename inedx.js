function changeCity(event){

event.preventDefault();
let textInput=document.querySelector("#text-input");
let city=textInput.value;
let cityName=document.querySelector(".main-left h1");
cityName.innerHTML=city;
};

let searchForm=document.querySelector("#search-form");
searchForm.addEventListener("submit",changeCity);