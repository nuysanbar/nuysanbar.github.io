// to display projects section from '

import {data} from  './projectData.js';
import { ModifiedData } from './modifiedProjectData.js';
const projects=document.getElementById('projects');
const next=document.querySelector('.next');

// Animating name and job text 
const nameObject=document.querySelector('#name');
var nameletters="Hello, I am Nusanbar and I'm a FullStack Developer".split('');
var index=0;
function animateText(toBeFilled,fillers){
    toBeFilled.innerHTML+=`<span class="letter">${fillers[index]}</span>`;
         index +=1;
       if(index===fillers.length){
         clearInterval(iterate);
         index=0;
       }
}
const iterate=setInterval(()=>animateText(nameObject,nameletters),70);
var text=``;
function addProject(){
    ModifiedData.forEach((video)=>{
        text+=`<div class='projectContainer'>
                <div class='projectDescription'>
                <h2>${video.description}</h2>
                <p>${video.content}</p>
                <a href='https://github.com/nuysanbar?tab=repositories'> <span class="ProjectNumber">${video.id} </span>${video.description} CODE <i class="fa-solid fa-arrow-right"></i></a>
                </div>
             </div>`
    })
    projects.innerHTML=text;
}
projects.addEventListener('onload',addProject())

// For displaying the skills hidden description
const skill=document.querySelectorAll('.skill');
skill.forEach((item)=>{
    item.addEventListener('click',(e)=>displayBlock(e))
})
function displayBlock(event){
    let choosen=event.currentTarget.children[2];
    let curren=event.currentTarget.children[3];
    choosen.classList.toggle("showBlock");
    if(choosen.classList.value.includes("showBlock")){
        curren.innerHTML='<i class="fa-sharp">showLess</i> ';
    }else{
        curren.innerHTML='<i class="fa-sharp">...showMore</i> ';
    }
}

// Implementing responsive menu icon for mobiles

const linkContainer=document.querySelector('.LinkContainer');
const cancel=document.querySelector('.cancel');
const expand=document.querySelector('.extend');
expand.addEventListener('click',()=>{
    linkContainer.classList.toggle('showDropDown')
    expand.classList.toggle('collapse');
})
cancel.addEventListener('click',()=>{
    linkContainer.classList.toggle('showDropDown');
    expand.classList.toggle('collapse');
})

// Balls animation
const m=document.querySelector('.m');
const e=document.querySelector('.e');
const r=document.querySelector('.r');
const n=document.querySelector('.n');

const x=10;
const y=10;
m.style.width=`${x}`;
m.classList.add('expanding')
m.style.height=`${y}`;
e.style.width=`${x+10}`;
e.style.height=`${y+10}`;
e.classList.add('expanding')
r.style.width=`${x}`;
r.style.height=`${y}`;
r.classList.add('expanding')
n.style.width=`${x+10}`;
n.style.height=`${y+10}`;
n.classList.add('expanding')

function moveBalls(obj){
    const widths=parseInt(obj.style.width.split('').slice(0,2).join(''));
if(widths<=0){
    obj.style.width=`${widths+5}`
    obj.style.height=`${widths+5}`
    obj.classList.toggle('expanding');
}
if(widths>60){
    obj.style.width=`${widths-5}`;
    obj.style.height=`${widths-5}`;
    obj.classList.toggle('expanding');
}else{
    if(obj.classList.value.includes('expanding')){
       obj.style.width=`${(widths)+5}`
       obj.style.height=`${(widths)+5}`
    }else{
       obj.style.width=`${widths-5}`;
       obj.style.height=`${widths-5}`;
    }
}
}
function moveN(){
    moveBalls(n)
}
function moveM(){
    moveBalls(m)
}
function moveE(){
    moveBalls(e)
}
function moveR(){
    moveBalls(r)
}
setInterval(moveN,150);
setInterval(moveM,250);
setInterval(moveE,100);
setInterval(moveR,300)


// testimonial 
import {testimonyData} from './testimonial.js';
const testimonial=document.querySelector('.testimonial');
const testimonialMobile=document.querySelector('.testimonialMobile');
var content=``;
var testimonyIndex=0;
testimonyData.forEach((testimony)=>{
    content+=`<div class="testimony">
            <img src="${testimony.src}" alt="nuy">
            <h3>${testimony.job}</h3>
            <h2>${testimony.name}</h2>
            <p>${testimony.comment}</p>
        </div>`
})
testimonial.innerHTML=content;
testimonialMobile.innerHTML=content;
function testimonyIndexChanger(){
     testimonialMobile.innerHTML=`<div class="testimony">
        <img src="${testimonyData[testimonyIndex].src}" alt="nuy">
        <h3>${testimonyData[testimonyIndex].job}</h3>
        <h2>${testimonyData[testimonyIndex].name}</h2>
        <p>${testimonyData[testimonyIndex].comment}</p>
    </div>`
    testimonyIndex++
    if(testimonyIndex===testimonyData.length){
        testimonyIndex=0
    }
}
testimonyIndexChanger();
const testimonyChanger=document.querySelector('.testimonyChanger');
testimonyChanger.addEventListener('click',testimonyIndexChanger)


