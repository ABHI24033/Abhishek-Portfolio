
let bars=document.getElementById('bars');
let header=document.querySelector(".header");

bars.addEventListener("click",()=>{
    bars.classList.toggle("fa-times");
    header.classList.toggle("toggle");
})
