const submitForm = document.querySelector('#saveUrl');

// export const addlink =(button)=>{

// }

submitForm.addEventListener("submit", addToStorage)

const addToStorage = (event)=>{
    event.preventDefault();
    const myFormData = new FormData(event.target);
    localStorage.setItem("linkStorage-" + el.id, el.innerText);
    console.log(myFormData);
}

// localStorage.setItem("urlStorage-" + el.id, el.innerText)