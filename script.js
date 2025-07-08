
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});




const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if(slides.length > 0) {
     slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000); // Change slide every 4 seconds
  }
 
}
function showSlide(index) {

  if (index >= slides.length) {
    slideIndex = 0;
  }
  else if (index < 0) {
    slideIndex = slides.length - 1;
  } 

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });

  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(intervalId); // Stop auto slide
  slideIndex--
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

