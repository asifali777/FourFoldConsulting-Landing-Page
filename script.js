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
   
})