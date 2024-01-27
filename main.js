import updateTime from "/timeAndDate.js";
import edit from "/saveEdit.js";
import publicHolidays from "./publicHolidays";  
import saveLink from "/links.js";


updateTime();
setInterval(()=>{updateTime()}, 1000);
edit();
publicHolidays();
saveLink();


