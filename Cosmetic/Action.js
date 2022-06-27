let left=document.getElementById('left');
let right=document.getElementById('right');
let s=document.getElementById('scrol-div');

let temp=1;

right.addEventListener('click',()=>{
    if(temp==1){
    s.style.transform="translateX(-100vw)";
    temp=2;
    }
    else
    {
        s.style.transform="translateX(-200vw)";
        
        
        }
})
left.addEventListener('click',()=>{
   if(temp==2){
    s.style.transform="translateX(-100vw)";
    temp=1;
   }
     else{
        s.style.transform="translateX(0px)";
     }   
})

let menu=document.getElementById('menu');
let slide=document.getElementById('scroll-side-bar');
let cross=document.getElementById('cut');
menu.addEventListener('click',()=>{
slide.style.transform="translateX(0vw)";
})
cross.addEventListener('click',()=>{
   slide.style.transform="translateX(-80vw)";
})

let arr1=document.querySelector('#arrow1 i');
let arr2=document.querySelector("#arrow2 i");
let s1=document.getElementById('move');

let temp1=1;

arr2.addEventListener('click',()=>{
    if(temp1==1){
    s1.style.transform="translateX(-45rem)";
    temp1=2;
    }
    else
    {
        s1.style.transform="translateX(-90rem)";
        
        
        }
})
arr1.addEventListener('click',()=>{
   if(temp1==2){
    s1.style.transform="translateX(-45rem)";
    temp1=1;
   }
     else{
        s1.style.transform="translateX(0rem)";
     }   
})

let ar1=document.querySelector('#arr1 i');
let ar2=document.querySelector("#arr2 i");
let s2=document.getElementById('move1');

let temp2=1;

ar2.addEventListener('click',()=>{
    if(temp2==1){
    s2.style.transform="translateX(-45rem)";
    temp2=2;
   
    }
    else
    {
        s2.style.transform="translateX(-90rem)";
        
        
        }
})
ar1.addEventListener('click',()=>{
   if(temp2==2){
    s2.style.transform="translateX(-45rem)";
    temp2=1;
   }
     else{
        s2.style.transform="translateX(0rem)";
     }   
})

let a1=document.querySelector('#arrow-left i');
let a2=document.querySelector("#arrow-right i");
let s3=document.getElementById('move2');

let temp3=1;

a2.addEventListener('click',()=>{
    s3.style.transform="translateX(-48rem)";
})
a1.addEventListener('click',()=>{
   
    s3.style.transform="translateX(0rem)";
   
})

