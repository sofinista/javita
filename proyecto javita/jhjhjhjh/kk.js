import {data} from '../data/jjj.js';
console.log(data)

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;

const fragment = document.createDocumentFragment()
let like = {};

document.addEventListener('DOMContentLoaded' , ()=>{
    loadData(data)

})

const loadData = data =>{
    data.forEach(Singers =>{
const {id,name,img} = Singers;
templateCard.querySelector('h5').textContent=name
templateCard.querySelector('img').setAttribute('src',img);
templateCard.querySelector('.btn-dark').dataset.id = id
 const clone = templateCard.cloneNode(true) 
 fragment.appendChild(clone)
 
    })
    
    items.appendChild(fragment)
}
