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
let Url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${myApi}&units=metric`;
axios.get(Url).then(changeTemperature);
};


function changeCity(event){

event.preventDefault();
let textInput=document.querySelector("#text-input");
changeUrl(textInput.value)
getUrl(textInput.value)    
};


let searchForm=document.querySelector("#search-form");
searchForm.addEventListener("submit",changeCity);

                                        // forcast part

function getDay(time){

    let newTime=new Date(time * 1000);
    let weekDays=["Wed","Thu","Fri","Sat","Sun","Mon","Tus"];
   return weekDays[newTime.getDay()];
}

function getForcast(response){

let forcastHtml="";

response.data.daily.forEach(function(day,index){

if(index < 5){
forcastHtml=forcastHtml+`
    <div class="forcast-item">
            <strong class="forcast-day">${getDay(day.time)}</strong>
            <div class="forcast-img">
            <img class="image" src="${day.condition.icon_url}">
            </div>
        <div class="forcast-degree">
        <div>${Math.round(day.temperature.maximum)}°</div>
        <div>${Math.round(day.temperature.minimum)}°</div>
        </div>
    </div>
`
}
});
let forcastDiv=document.querySelector("#forcast-div");
forcastDiv.innerHTML=forcastHtml;
};

function getUrl(city){
    let myApi="c788bbe4fbob842f25a727737f00tc5e";
    let Url=`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${myApi}&units=metric`;
    axios.get(Url).then(getForcast);
};
