
let bars=document.getElementById('bars');
let header=document.querySelector(".header");

bars.addEventListener("click",()=>{
    bars.classList.toggle("fa-times");
    header.classList.toggle("toggle");
})

// activete the current navbar

let list=document.querySelectorAll(".navbar ul li>a");
const section=document.querySelectorAll(".section");

function activeLink(li) {
    list.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
list.forEach((item)=>{
    item.addEventListener("click",()=>{
        activeLink(item);
        bars.classList.toggle("fa-times");
        header.classList.remove("toggle");
    })
})


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`);
            activeLink(target);
        }
    })
};


// active the portfolio nav

// .portfolio_nav>li>a.{
    let portfolio_nav_list=document.querySelectorAll(".portfolio_nav>li>a");
    console.log(portfolio_nav_list);
    function activePortfolioLink(listItem){
        portfolio_nav_list.forEach((item)=>item.classList.remove("active"));
        listItem.classList.add("active");
    }
    portfolio_nav_list.forEach((item)=>{
        item.addEventListener("click",()=>{
            activePortfolioLink(item);
        })
    })