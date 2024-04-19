import axios from "axios";
import {ICON_MAP} from "./iconMap";
const weather = document.querySelector('#weather');
const weatherBtn = document.querySelector('#btn-weather')
const longitude= document.querySelector('#long')
const latitude= document.querySelector('#lat')

navigator.geolocation.getCurrentPosition(positionSucess,positionError)


function positionError(){
    alert(
        "There was an error getting your location. Please allow us to use your location and refresh the page."
    )
}

function positionSucess({coords})
{
    let lat = coords.latitude;
    let lon = coords.longitude;
    fetchData(lat,lon)

    weatherBtn.addEventListener('click',(e)=>
    {
        lat = latitude.value != "" ? latitude.value : coords.latitude;
        lon = longitude.value != "" ? longitude.value : coords.longitude;
        fetchData(lat,lon)
    })
    
}

function fetchData(lat,lon)
{
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    axios.get( `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,uv_index_max,uv_index_clear_sky_max,rain_sum,snowfall_sum&timeformat=unixtime&timezone=${timezone}&forecast_days=3`)
    .then(res => {
        daily(res.data);
    })

}

export default function getWeather(){
    
   positionSucess();
}

function daily(data){
    
    const dayOfTheWeek = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
    let date = new Date();
    weather.innerHTML=""

    for(let i = 0; i < data.daily.temperature_2m_max.length; i++)
    {
        weather.innerHTML += `
        <div class="p-1 rounded bg-light opacity-50 d-flex justify-content-between m-1">
            <img src="${getIconUrl(data.daily.weather_code[i])}" alt="icon" class="d-inline img-fluid mx-2" style="width: 2rem;"> 
            <div>
                <p class="ml-1 text-capitalize fw-medium d-block">${date.getDay()+i>6?dayOfTheWeek[date.getDay()+i-7]: dayOfTheWeek[date.getDay()+i]}</p>
                <p class="ml-1 px-1 d-inline text-capitalize fw-medium bg-secondary-subtle rounded">${data.daily.temperature_2m_max[i]} C&#176;</p>
                <p class="ml-1 px-1 d-inline text-capitalize fw-medium bg-secondary-subtle rounded">${getSummery(data.daily.weather_code[i])} </p>
            </div>
        </div>
        `
        
    }
    
}

const getIconUrl = (iconCode)=>{
    return `Assets/${ICON_MAP.get(iconCode)}.svg`
}
const getSummery = (code)=>{
    return `${ICON_MAP.get(code)}`
}