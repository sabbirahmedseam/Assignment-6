
const loadData = () => {
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
        .then(res => res.json())
        .then(data => displayData(data.data))
}

const displayData = (value) => {
    // console.log(value);
    const showPart = document.getElementById('show-part');
    value.forEach(data => {
        // console.log(data);
        const { _id, title, details, image_url,category_id } = data;
        // console.log(_id);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card ">
                <img src="${image_url}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${details.slice(0, 50) ? details.slice(0, 60) + '.....' : '...'}</p>
                </div>
                <div  style="height:50px" class="d-flex justify-content-between p-1">
                <div style="display:flex;">
                    <div>
                        <img style="width:30px" src="${data.author.img}">
                    </div>
                    <div>
                        <b>${data.author.name} </b>
                        <p>${data.author.published_date}</p>
                    </div>
                </div>
                <div>
                    <button onclick="clicker('${_id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                       Details
                    </button>
                </div>
            </div>        
               
     
    </div>

`
        showPart.appendChild(div);



    });
}


// const clicker = (data)=> {
//     fetch(`https://openapi.programming-hero.com/api/news/${data}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//     console.log(data);
// }


// fetch(`https://openapi.programming-hero.com/api/news/2e78e5e0310c2e9adbb6efb1a263e745`)
// .then(res=>res.json())
// .then(data=>console.log(data))

loadData();
// Modal 2 blog part
const blog=()=>{
    console.log('data');
}


