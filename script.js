// SLIDER
let slides = document.querySelectorAll(".slide");
let i = 0;

function changeSlide(){
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");

    i++;
    if(i >= slides.length) i = 0;
}

setInterval(changeSlide, 4000);

// MOBILE MENU
function toggleMenu(){
    let menu = document.getElementById("navLinks");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}