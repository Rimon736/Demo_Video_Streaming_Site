// console.log('Hello, World!');

const buttonReaction=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=> categoryButton(data.categories))
}

const categoryButton=(categories)=>{
    
    const category=document.getElementById("category_container");

    for(let cat of categories){
        console.log(cat);

        const categoryDiv= document.createElement("div");
        
        categoryDiv.innerHTML=`<button class="m-2 p-2 rounded-sm bg-slate-400 hover:text-white py-1  hover:bg-[#FF1F3D]" onclick="">${cat.category}</button>`;

        category.appendChild(categoryDiv);
    }
}

buttonReaction();