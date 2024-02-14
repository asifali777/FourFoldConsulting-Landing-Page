document.querySelector(".Purpose-strategy").addEventListener("click",()=>{
   document.querySelector(".details").classList.toggle("active1");
   document.getElementById("substract1").classList.toggle("hidden");
   document.getElementById("add1").classList.toggle("hidden");
})
document.querySelector(".Growth-transformation").addEventListener("click",()=>{
   document.querySelector(".details1").classList.toggle("active2");
      document.getElementById("substract2").classList.toggle("hidden");
   document.getElementById("add2").classList.toggle("hidden");
})
document.querySelector(".Leadership-teams").addEventListener("click",()=>{
   document.querySelector(".details2").classList.toggle("active3");
      document.getElementById("substract3").classList.toggle("hidden");
   document.getElementById("add3").classList.toggle("hidden");
})
document.querySelector(".Culture-design").addEventListener("click",()=>{
   document.querySelector(".details3").classList.toggle("active4");
      document.getElementById("substract4").classList.toggle("hidden");
   document.getElementById("add4").classList.toggle("hidden");
});


let lastScrollTop = 0;
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        navbar.style.top = "-200px"; // Hide the navbar off-screen
    } 
    else {
        // Scroll up
        navbar.style.top = "0"; 
        navbar.style.backgroundColor = "white";
        // Show the navbar
      //   navbar.style.backgroundColor = "white";
    }
    if (currentScroll === 0) {
      // Reached the top
      navbar.style.backgroundColor = "transparent";
  }
    lastScrollTop = currentScroll;
});


const button  = document.querySelector(".hamburger-button");
button.addEventListener("click", ()=>{
   const isOpen = button.getAttribute("aria-expended");
   if (isOpen === "false"){
      button.setAttribute('aria-expended', 'true');
   }else{
      button.setAttribute('aria-expended', 'false');
   }
   document.querySelector(".nav-right").classList.toggle('activeNav');
   document.querySelector("body").classList.toggle('noScroll');
   
});

gsap.from(".about-content-text",{
   x:-100,
   duration:1,
   opacity:0,
   scrollTrigger:".about-content-text"
})
gsap.from(".img",{
   x:100,
   duration:1,
   opacity:0,
   scrollTrigger:".img"
})
gsap.from(".poster-img-div img",{
   y:100,
   delay:.5,
   duration:1,
   opacity:0,
   scrollTrigger:".poster-img-div"

});
gsap.from(".service-section-left",{
   x:-100,
   duration:1,
   opacity:0,
   delay:.5,
   scrollTrigger:".service-section-left"
});
gsap.from(".Purpose-strategy",{  
   y:-10,
   duration:1,
   opacity:0,
   scrollTrigger:".service-section-left"
})
gsap.from(".Growth-transformation",{
   y:-10,
   duration:1,
   delay:1,
   opacity:0,
   scrollTrigger:".service-section-left"
})
gsap.from(".Leadership-teams",{
   y:-10,
   duration:1,
   delay:2,
   opacity:0,
   scrollTrigger:".service-section-left"
})
gsap.from(".Culture-design",{
   y:-10,  
   duration:1,
   delay:3,
   opacity:0,
   scrollTrigger:".service-section-left"
});
gsap.from(".about-content",{
   delay:1,
   y:30,  
   duration:1,
   opacity:0,
   scrollTrigger:".about-content"
})
gsap.from(".galary-left,.galary-right",{  
   duration:1,
   scale:.8, 
   scrollTrigger:".galary-left,.galary-right"
});
gsap.from(".form-right h1",{
   y:20,  
   duration:1,
   scrollTrigger:".form-right"
});
gsap.from("footer p",{
   y:20,  
   duration:1.5,
   scrollTrigger:"footer"
});