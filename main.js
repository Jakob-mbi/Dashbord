import {updateTime} from "/timeAndDate.js";
import {edit} from "/saveEdit.js";
import { publicHolidays } from "./publicHolidays";  


const clock = document.querySelector('#time');
const dates = document.querySelector('#date');
const editables = document.querySelectorAll("[contenteditable]");
const publicHolidaysId = document.querySelector("#PublicHolidays");

updateTime(clock,dates);
setInterval(()=>{updateTime(clock,dates)}, 1000);
edit(editables);
publicHolidays(publicHolidaysId);

// const submitForm = document.querySelector('#saveUrl');

// export const addlink =(button)=>{

// }


// const addToStorage = (event)=>{
//     event.preventDefault();
//     const myFormData = new FormData(event.target);
//     const formDataObj = {};
//     myFormData.forEach((value, key) => (formDataObj[key] = value));
//     console.log(formDataObj);
// }
// submitForm.addEventListener("submit", addToStorage)


