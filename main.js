import updateTime from "/timeAndDate.js";
import edit from "/saveEdit.js";
import publicHolidays from "./publicHolidays";  
import saveLink from "/links.js";
import getWeather from "./weather";

updateTime();
setInterval(()=>{updateTime()}, 1000);
edit();
publicHolidays();
saveLink();
getWeather();

