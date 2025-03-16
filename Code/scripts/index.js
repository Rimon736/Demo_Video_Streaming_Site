// console.log('Hello, World!');

const buttonReaction=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data=> categoryButton(data.categories))
}

const categoryVideos=(id)=>{
    const url= `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data=> videoCard(data.category))
}


const categoryButton=(categories)=>{
    
    const category=document.getElementById("category_container");


    for(let cat of categories){
        console.log(cat);

        const categoryDiv= document.createElement("div");
        
        categoryDiv.innerHTML=`<button class="m-2 p-2 rounded-sm bg-slate-400 hover:text-white py-1  hover:bg-[#FF1F3D]" onclick="categoryVideos(${cat.category_id})">${cat.category}</button>`;

        category.appendChild(categoryDiv);
    }
}


const videofetch=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then(data => videoCard(data.videos))
}

const videoCard = (videos) => {
    const vidContainer=document.getElementById("videos_container");
    vidContainer.innerHTML="";
    for(let vid of videos){

        const vidDiv= document.createElement("div")
        vidDiv.innerHTML=`
        <div class="card bg-base-100 shadow-sm rounded">
                <figure class="relative">
                    <img class="rounded h-[150px] object-cover"
                    src="${vid.thumbnail}"
                    alt="${vid.thumbnail}" />
                    <small class="absolute text-[14px] text-white bg-black bottom-2 right-2 p-1 rounded">3days 2 hours</small>
                </figure>
                <div class=" flex flex-row p-2">
                    <div class="m-2"> <img src="${vid.authors[0].profile_picture}" alt="profile picture" class="rounded-[50%] object-cover w-10 h-10 p-0"></div>
                    <div class="m-2">
                        <div>
                            <h1 class="font-bold">${vid.title}</h1>
                        </div>
                        <div class="flex flex-row p-0">
                            <p class="text-slate-500 text-[14px]">${vid.authors[0].profile_name}</p>
                            <img class="w-4 h-4 mx-2" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="verified">
                        </div>
                        <div>
                            <p class="text-slate-500">${vid.others.views}</p>
                        </div>
                    </div>
                </div>
                </div>
        `

        vidContainer.appendChild(vidDiv);
    }
}



buttonReaction();