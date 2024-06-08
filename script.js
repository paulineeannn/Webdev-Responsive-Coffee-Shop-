// update navigation bar depending on the page
function updateNavigation() {
    // get position of each section and store in an array
    const positions = [];
    document.querySelectorAll('.contNav a').forEach(function(link) {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      positions.push(targetElement.offsetTop);
    });
  
    const scrollPosition = window.scrollY+100;
  
    positions.forEach(function(positions, index) {
      const link = document.querySelectorAll('.contNav a')[index];
      if (scrollPosition >= positions) {
        document.querySelectorAll('.contNav a').forEach(function(link) {
          link.classList.remove('selectedMenuButton');
        });
        link.classList.add('selectedMenuButton');
      }
    });
  }
  
  // scroll to target section
  document.querySelectorAll('.contNav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  
  window.addEventListener('scroll', function() {
    updateNavigation();
  });

//   // hamburger menu
//   document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.listNav');

//     hamburger.addEventListener('click', function() {
//         navMenu.classList.toggle('active');
//     });
// });

const hamburger = document.querySelector(".contHamburger");
const listNav = document.querySelector(".listNav");
const contNav = document.querySelector(".contNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  listNav.classList.toggle("active");
  contNav.classList.toggle("active");
})

document.querySelectorAll(".navItem").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  listNav.classList.remove("active");
  contNav.classList.remove("active");
}))