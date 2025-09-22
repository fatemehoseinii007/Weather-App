function changeUrl(city){
let myApi='c788bbe4fbob842f25a727737f00tc5e';
let Url=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${myApi}`;
}
function changeCity(event){
event.preventDefault();
let textInput=document.querySelector("#text-input");
let cityName=document.querySelector(".main-left h1");
cityName.innerHTML=textInput.value;
changeUrl(textInput.value)
};

// axios.get(url).then()

let searchForm=document.querySelector("#search-form");
searchForm.addEventListener("submit",changeCity);