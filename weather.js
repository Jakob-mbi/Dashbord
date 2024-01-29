//https://api.open-meteo.com/v1/forecast?&daily=weather_code,temperature_2m_max,uv_index_max,uv_index_clear_sky_max,showers_sum,snowfall_sum&timeformat=unixtime&forecast_days=3
import axios from "axios";
import {ICON_MAP} from "./iconMap";
const weather = document.querySelector('#weather');

export default function getWeather(){
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const lat = 67.8557;
    const lon = 20.2251;
   
    axios.get( `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,uv_index_max,uv_index_clear_sky_max,rain_sum,snowfall_sum&timeformat=unixtime&timezone=${timezone}&forecast_days=3`)
    .then(res => {
        console.log(res);
       daily(res.data);
    })
    
}

export function daily(data){
    console.log(data.daily.temperature_2m_max[0])
    const dayOfTheWeek = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
    let date = new Date();

    for(let i = 0; i < data.daily.temperature_2m_max.length; i++)
    {
        weather.innerHTML += `
        <div class="p-1 rounded bg-light opacity-50 d-flex justify-content-between m-1">
            <div class="h-100">
                <img src="${getIconUrl(data.daily.weather_code[i])}" alt="icon" class="d-inline img-fluid"> 
            </div>
            <div>
                <p class="ml-1 d-inline text-capitalize fw-medium">${dayOfTheWeek[date.getDay()+i]}</p>
                <p class="ml-1 d-inline text-capitalize fw-medium">${data.daily.temperature_2m_max[i]} C&#176;</p>
            </div>
        </div>
        `
        
    }
    
}

const getIconUrl = (iconCode)=>{
    return `Assets/${ICON_MAP.get(iconCode)}.svg`
}