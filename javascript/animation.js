let sidebar=document.querySelector(".header");
// let home=document.querySelector(".home");
// let about=document.querySelector(".about")

gsap.from(sidebar,{x:-200 ,duration:2});
gsap.to(sidebar,{x:0,duration:2});
// gsap.from(home,{yPercent:100,duration:2});
// gsap.from(about,{yPercent:100,duration:2});