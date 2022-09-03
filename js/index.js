
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
        const { _id, title, details, image_url, category_id } = data;
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
                        <img  class="rounded-circle" style="width:30px" src="${data.author.img}">
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


const clicker = (data) => {
    fetch(`https://openapi.programming-hero.com/api/news/${data}`)
        .then(res => res.json())
        .then(data => diplayModalOne(data.data[0]))

}

const diplayModalOne = (data) => {
    const modalOne = document.getElementById('modal-one');
    modalOne.innerHTML = ``;
    const { author, _id } = data;
    
    const { img, name, published_date } = author;
    const div = document.createElement('div');
    div.innerHTML = `
     <img class="img-fluid" src="${img}">
    <p>Id:${_id}</p>
     <p>Name:${name === 'system' ? 'name not avialable' : name}</p>
    <p>Release Date:${published_date}</p>
    
    `
    modalOne.appendChild(div);
}

// categories part

fetch(`https://openapi.programming-hero.com/api/news/categories`)
.then(res=>res.json())
.then(data=> displayCategory(data.data.news_category))

const rowColumn=document.getElementById('row-column');
const displayCategory=(value)=>{
   
 value.forEach(data=>{
     console.log(data.category_name);
const div=document.createElement('div');
 div.classList.add('col');
div.innerHTML=`
<h6 class="text-center">${data.category_name}</h6>
`
rowColumn.appendChild(div);


 })
}



// Modal 2 blog part
const blog = () => {
  const modalTwoPart=document.getElementById('modal-two');
  modalTwoPart.innerHTML=`
  <p>Var : var variables can be updated and re-declared within its scope; 
  <p>Let : let variables can be updated but not re-declared; 
  <p>Const : const variables can neither be updated nor re-declared;
  <p>Reg.Func : Regular functions created using function declarations or expressions are constructible and callable. 
  <p>Arrow Func : Since regular functions are constructible, they can be called using the new keyword.
  <p>.map() when needs to transform elements in an array.
  <p>.filter() when needs  to select a subset of multiple elements from an array.
  <p>.find() When needs to select a single element from an array.
  <p>.forEach() when  simply pass a function that is executed on each element in the array.
   <p>Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.</p>
  `

}

loadData();
