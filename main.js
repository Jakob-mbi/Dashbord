import {updateTime} from "/timeAndDate.js";
import {title} from "/savePageTitle.js";

const editables = document.querySelectorAll("[contenteditable]");

updateTime();
setInterval(updateTime, 1000);

title(editables);
