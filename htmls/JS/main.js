const navpen = document.querySelector(".nav-icon");
const navclose = document.querySelector(".close-icon");
const navList = document.querySelector(".nav-list");
const bgOverlay = document.querySelector(".nav-bgoverlay");

const navOpen = () =>{
    navList.classList.add("show");
    bgOverlay.classList.add("active");
    document.body.style='visibility:visible;height:100vh;width:100vw;overflow:hidden;';

}

const navClose = () =>{
    navList.classList.remove("show");
    bgOverlay.classList.remove("active");
    navclose.classList.remove("show");
    document.body.style='visibility:visible; height:initial; width:100%; overflow-x:hidden';
    
}

navpen.addEventListener("click",navOpen);
navclose.addEventListener("click",navClose);
bgOverlay.addEventListener("click",navClose);


//aos
// AOS.init({
//     offset:200,
//     delay:100,
//     duration:400,
//     easing:'ease',
//     once:false,
//     mirror:false,
//     anchorPlacement:"top-bottom"
// })


const sr = ScrollReveal({
    origin:"top",
    //easing:"ease",
    distance:"80px",
    duration:2000,
    delay:100,
    reset:false,
});

sr.reveal(
    `
    .navs,
    .flex,
    .store-info,
    .special-wrapper,
    .left-cols
    .right-colos `,
    {
        interval:200,
    }
);