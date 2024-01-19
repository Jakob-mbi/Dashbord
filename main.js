import {updateTime} from "/timeAndDate.js";
import {title} from "/savePageTitle.js";

const clock = document.querySelector('#time');
const dates = document.querySelector('#date');
const editables = document.querySelectorAll("[contenteditable]");

updateTime(clock,dates);
setInterval(()=>{updateTime(clock,dates)}, 1000);

title(editables);
