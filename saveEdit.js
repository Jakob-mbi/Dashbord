


export const edit =(editables)=>{

    // save edits
    editables.forEach(el => {
    el.addEventListener("blur", () => {
        localStorage.setItem("dataStorage-" + el.id, el.innerText);
    })
    });

    // once on load
    for (let key in localStorage) {
        if (key.includes("dataStorage-")) {
            const id = key.replace("dataStorage-","");
            document.querySelector("#" + id).innerText = localStorage.getItem(key);
        }
    }
}
