// document.addEventListener("DOMContentLoaded", () => {
//   const toggle = document.getElementById("menu-toggle");
//   const links = document.querySelector(".nav-links");

//   toggle.addEventListener("click", () => {
//     links.classList.toggle("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});


// let currentSlide = 0;
// let autoSlideInterval;

// function moveSlide(direction) {
//   const slides = document.querySelector(".slides");
//   const totalSlides = document.querySelectorAll(".slide").length;

//   currentSlide += direction;
//   if (currentSlide < 0) currentSlide = totalSlides - 1;
//   if (currentSlide >= totalSlides) currentSlide = 0;

//   slides.style.transform = `translateX(-${currentSlide * 100}%)`;
// }

// function startAutoSlide() {
//   clearInterval(autoSlideInterval); // Prevent multiple intervals
//   autoSlideInterval = setInterval(() => {
//     moveSlide(1);
//   }, 4000); // change slide every 4 seconds
// }

// function stopAutoSlide() {
//   clearInterval(autoSlideInterval);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const slides = document.querySelector(".slides");
//   slides.style.width = `${document.querySelectorAll(".slide").length * 100}%`;

//   startAutoSlide();

//   // Optional: stop autoplay on hover
//   const slider = document.querySelector(".slider");
//   slider.addEventListener("mouseenter", stopAutoSlide);
//   slider.addEventListener("mouseleave", startAutoSlide);
// });


// let currentSlide = 0;
// let autoSlideInterval;
// let isAutoSliding = false;

// function moveSlide(direction) {
//   const slides = document.querySelector(".slides");
//   const totalSlides = document.querySelectorAll(".slide").length;

//   currentSlide += direction;
//   if (currentSlide < 0) currentSlide = totalSlides - 1;
//   if (currentSlide >= totalSlides) currentSlide = 0;

//   slides.style.transform = `translateX(-${currentSlide * 100}%)`;
// }

// function startAutoSlide() {
//   if (isAutoSliding) return; // Prevent multiple intervals
//   isAutoSliding = true;
//   autoSlideInterval = setInterval(() => {
//     moveSlide(1);
//   }, 4000);
// }

// function stopAutoSlide() {
//   clearInterval(autoSlideInterval);
//   isAutoSliding = false;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const slides = document.querySelector(".slides");
//   slides.style.width = `${document.querySelectorAll(".slide").length * 100}%`;

//   startAutoSlide();

//   const slider = document.querySelector(".slider");
//   slider.addEventListener("mouseenter", stopAutoSlide);
//   slider.addEventListener("mouseleave", startAutoSlide);
// });

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

  // const prevButton = document.querySelector(".prev");
  // const nextButton = document.querySelector(".next");

  // prevButton.addEventListener("click", () => {
  //   clearInterval(intervalId); // Stop auto slide
  //   prevSlide();
  //   intervalId = setInterval(nextSlide, 5000); // Restart auto slide
  // });

  // nextButton.addEventListener("click", () => {
  //   clearInterval(intervalId); // Stop auto slide
  //   nextSlide();
  //   intervalId = setInterval(nextSlide, 5000); // Restart auto slide
  // });


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

