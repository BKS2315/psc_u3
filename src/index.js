//https://api.unsplash.com/
//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=RI54h3ClPOhxYh9kxMLHNjb1lwN3FuaSNR0TG1vjuEk
// const API = "RI54h3ClPOhxYh9kxMLHNjb1lwN3FuaSNR0TG1vjuEk";

import { navbar} from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {searchImages,append} from "./fetch.js";
import  "../styles/navbar.css"
import "../styles/index.css"

let search = (e) => {     //on pressing enter it will send value to query
    if(e.key ==="Enter"){  
        let query = document.getElementById("query").value;
       
        searchImages(query).then((data) =>{
            console.log('data:', data)
            let container = document.getElementById("container")
            container.innerHTML=null;
            append(data.results,container)
        });
    }
};

document.getElementById("query").addEventListener("keydown",search);

let categories = document.getElementById("categories").children;
console.log('categories:', categories)

function cSearch (){
    console.log(this.id)
    searchImages(this.id).then((data) =>{
        
        console.log('data:', data)
        let container = document.getElementById("container")
        container.innerHTML=null;
        append(data.results,container)
    });
}

for(let el of categories){
    el.addEventListener("click",cSearch);
}






