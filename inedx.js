function changeTemperature(response){
let temperature=response.data.temperature.current;
let temperatureDegree=document.querySelector("#degree");
temperatureDegree.innerHTML=Math.round(temperature);

let humidity=document.querySelector("#Humidity");
humidity.innerHTML=response.data.temperature.humidity;

let wind=document.querySelector("#Wind");
wind.innerHTML=response.data.wind.speed;

let cityName=document.querySelector(".main-left h1");
cityName.innerHTML=response.data.country;

let weatherDiscription=document.querySelector("#weather-discription");
weatherDiscription.innerHTML=response.data.condition.description;
};


function changeUrl(city){
let myApi='c788bbe4fbob842f25a727737f00tc5e';
let Url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${myApi}`;
axios.get(Url).then(changeTemperature);
};


function changeCity(event){

event.preventDefault();
let textInput=document.querySelector("#text-input");
// let cityName=document.querySelector(".main-left h1");
changeUrl(textInput.value)    
};


let searchForm=document.querySelector("#search-form");
searchForm.addEventListener("submit",changeCity);