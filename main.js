import {updateTime} from "/timeAndDate.js";
import {edit} from "/saveEdit.js";
import { publicHolidays } from "./publicHolidays";  


const clock = document.querySelector('#time');
const dates = document.querySelector('#date');
const editables = document.querySelectorAll("[contenteditable]");
const publicHolidaysId = document.querySelector("#PublicHolidays");
const form = document.querySelector('#saveUrl')

updateTime(clock,dates);
setInterval(()=>{updateTime(clock,dates)}, 1000);
edit(editables);
publicHolidays(publicHolidaysId);

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(localStorage.getItem('links') == null)
    {
        localStorage.setItem('links','[]');
    }
    const data = new FormData(e.target);
    const new_data = {
        name: data.get('name'),
        url: data.get('url')
    }
    var old_data = JSON.parse(localStorage.getItem('links'));
    old_data.push(new_data);
    console.log(new_data);
});

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


