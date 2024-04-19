
import axios from "axios";

export default function bgBtn(){
    const btn = document.querySelector('#bg-button');
    const serchWord = document.querySelector('#serchWord')

    const key ='';
    
    btn.addEventListener('click', getNewImage);


    function getNewImage(){
        
        let query = serchWord.value==""?"nature": serchWord.value
        let randomNumber = Math.floor(Math.random() * 10);
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${key}`)
        .then((res)=> {
            let allImages = res.data.results[randomNumber];
            document.querySelector('body').style.backgroundImage =`url('${allImages.urls.regular}')`;
            })
        .catch((err)=> console.log(err))
    }
    
}




