const form = document.querySelector('#saveUrl')
const links = document.querySelector('#links');


export default function saveLink(){
    
    const addArraytoStorage = ()=>{
        if(localStorage.getItem('links') == null)
        {
            localStorage.setItem('links','[]');
        }
    }
    const removeListener =(btn)=>{
        const removebtn = document.querySelector(`#btn-${btn}`);
        removebtn.addEventListener("click",()=>{
            let old_data = JSON.parse(localStorage.getItem('links'));
            old_data.splice(btn,1);
            localStorage.setItem('links',JSON.stringify(old_data));
            displayLinkList();
        })
    }
    
    // const removeLink=((id)=>{
    //     let old_data = JSON.parse(localStorage.getItem('links'));
    //     old_data.splice(id,1);
    //     localStorage.setItem('links',JSON.stringify(old_data));
    //     displayLinkList();
    // });

    const displayLinkList = ()=>{
        addArraytoStorage();
        links.innerHTML="";
        let old_data = JSON.parse(localStorage.getItem('links'));
        old_data.map((data)=>{
            links.innerHTML+=
            `
            <div class="p-1 rounded bg-light opacity-50 d-flex justify-content-between m-1">
                <a href="${data.url}" class="link-offset-2 link-underline link-underline-opacity-0 text-dark">
                <img src="https://www.google.com/s2/favicons?domain=${data.url}&sz=32" alt="icon" class="d-inline"> 
                <p class="ml-1 d-inline text-capitalize fw-medium">${data.name}</p>
                </a>
                <button class="btn btn-outline-light p-0 opacity-50" id="btn-${old_data.indexOf(data)}"><img src="/remove.svg" alt=""></button>
            </div>
          `
          removeListener(old_data.indexOf(data));
        });
        
    }
    displayLinkList();

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        addArraytoStorage();

        const data = new FormData(e.target);
        const new_data = {
            name: data.get('name'),
            url: data.get('url')
        }
        let old_data = JSON.parse(localStorage.getItem('links'));
        old_data.push(new_data);
        localStorage.setItem('links',JSON.stringify(old_data));
        displayLinkList();
    });

    // removeBtn.forEach(btn =>{
    //     btn.addEventListener("click",()=>{
    //     let old_data = JSON.parse(localStorage.getItem('links'));
    //     old_data.splice(btn.value,1);
    //     localStorage.setItem('links',JSON.stringify(old_data));
    //     displayLinkList();
    //     })
    // })

    // const removeListener =(btn)=>{
    //     const removebtn = document.querySelector(`#btn-${btn}`);
    //     removebtn.addEventListener("click",()=>{
    //         let old_data = JSON.parse(localStorage.getItem('links'));
    //         old_data.splice(btn,1);
    //         localStorage.setItem('links',JSON.stringify(old_data));
    //         displayLinkList();
    //     })
    // }
}



// onclick="()=>{removeLink(${old_data.indexOf(data)})}"