
import axios from "axios";

export default function bgBtn(){
    const btn = document.querySelector('#bg-button');

    
    btn.addEventListener('click', getNewImage);


    function getNewImage(){
        const key = '';
        let randomNumber = Math.floor(Math.random() * 10);
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=nature&client_id=${key}`)
        .then((res)=> {
            let allImages = res.data.results[randomNumber];
            document.querySelector('body').style.backgroundImage =`url('${allImages.urls.regular}')`;
            })
        .catch((err)=> console.log(err))
    }
    
}




