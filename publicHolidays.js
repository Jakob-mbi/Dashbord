const publicHoliday = document.querySelector("#PublicHolidays");

export default function publicHolidays(){

    let year = new Date();
    axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year.getFullYear()}/SE`)
    .then((res)=> holidays(res))
    .catch((err)=> console.log(err))

    const holidays = (data)=>{
        data.data.forEach((id)=>{
            publicHoliday.innerHTML += `
            <div class="rounded bg-light opacity-50 d-flex justify-content-center flex-wrap m-1 rounded p-2">
                <p class="text-nowrap block mx-1">${id.date}</p>
                <p class="text-capitalize block">${id.localName}</p>
            </div>
            `
        })
        
    }

}
