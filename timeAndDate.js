const clock = document.querySelector('#time');
const dates = document.querySelector('#date');


export const updateTime = ()=>{
    let timeDate = new Date();
    let time = new Intl.DateTimeFormat("sv",{timeStyle:"short"});
    let date = new Intl.DateTimeFormat("sv",{dateStyle:"medium"});
    clock.innerHTML = `${time.format(timeDate)}`;
    dates.innerHTML = `${date.format(timeDate)}`;
}
