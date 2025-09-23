function changeTemperature(response){

let temperature=response.data.temperature.current;
let temperatureDegree=document.querySelector("#degree");
temperatureDegree.innerHTML=Math.round(temperature);

let humidity=document.querySelector("#Humidity");
humidity.innerHTML=`${response.data.temperature.humidity}%`;

let wind=document.querySelector("#Wind");
wind.innerHTML=`${response.data.wind.speed}km/h`;

let cityName=document.querySelector(".main-left h1");
cityName.innerHTML=response.data.country;

let weatherDiscription=document.querySelector("#weather-discription");
weatherDiscription.innerHTML=response.data.condition.description;

timeCall(response.data.time);

let temperatureUnit=document.querySelector("#temperature-unit");
temperatureUnit.innerHTML=`<img src="${response.data.condition.icon_url}"></img>`;
};

function timeCall(date){

let apiTime=new Date(date*1000);
let time=document.querySelector("#time");

let Hours=apiTime.getHours();
let Minute=apiTime.getMinutes();
let getDay=apiTime.getDay();

let days=[
    "Saturday",
    "Sunday",
    "Monday",
    "Thusday",
    "Wendsday",
    "Thursday",
    "Friday"
];
let day=days[getDay];

if(Minute<=10){
    Minute=`0${Minute}`
}

time.innerHTML=`${day} ${Hours}:${Minute}`;
}

function changeUrl(city){

let myApi='c788bbe4fbob842f25a727737f00tc5e';
let Url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${myApi}&units=imperial`;
axios.get(Url).then(changeTemperature);
};


function changeCity(event){

event.preventDefault();
let textInput=document.querySelector("#text-input");
changeUrl(textInput.value)    
};


let searchForm=document.querySelector("#search-form");
searchForm.addEventListener("submit",changeCity);