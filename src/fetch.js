let searchImages = async (query)=>{
   
    try{
            let res = await fetch(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=RI54h3ClPOhxYh9kxMLHNjb1lwN3FuaSNR0TG1vjuEk`)
            let data = await res.json()
            console.log(data)
            return data;
    }catch(err){
        console.log(err)
    }
}


let append = (data,container)=>{
    data.map(({alt_description,urls:{small}})=>{
   let div = document.createElement("div");
   let img = document.createElement("img");
   let h3 = document.createElement("h3");
   img.src = small;
   h3.innerText = alt_description;

   div.append(img,h3);
   container.append(div);

    })
}


export {searchImages,append}