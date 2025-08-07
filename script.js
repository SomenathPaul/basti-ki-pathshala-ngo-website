const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];

let index = 0;
const aboutSection = document.querySelector(".about-section");

setInterval(() => {
  aboutSection.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}, 2000); // Change every 2 seconds
