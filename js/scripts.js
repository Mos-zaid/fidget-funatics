/*================== MOBILE MENU ===================== */
// 1 ELEMENT
let hamburgerIcon = document.querySelector(".hamburger-script")
let mobileNav = document.querySelector(".mobile-nav-script")
let mobileNavShowing = false


//  2 EVENT
hamburgerIcon.addEventListener("click", toggleMobileMenu)


// 3 ACTION
function toggleMobileMenu(){
  // mobileMenu.classList.toggle("site-header__nav-links__is-active");
  if(mobileNavShowing){
    // Add the initial values
    mobileNav.classList.add("d-none", "d-lg-flex", "justify-content-lg-center", "gap-5");
    // Remove the Mobile Classes
    mobileNav.classList.remove("d-flex", "flex-column", "gap-1", "align-content-center", "justify-content-center", "pb-4", "fw-600", "text-center", "mt-3", "mb-0");
    mobileNavShowing = false
  }else{
    // Remove the initial values
    mobileNav.classList.remove("d-none", "d-lg-flex", "justify-content-lg-center", "gap-5");
    // Add the Mobile Classes
    mobileNav.classList.add("d-flex", "flex-column", "gap-2", "align-content-center", "justify-content-center", "pb-4", "fw-600", "text-center", "mt-3", "mb-0");

    mobileNavShowing = true
  }
}


/*================== ANIMATION ===================== */
// Fade Up Function
function reveal__up() {
    // Find all reveal-up elements
    var reveals = document.querySelectorAll(".reveal-up");

    // Loop through all of them
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 65;

        // If the element is in within the screen
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal__up);

// To check the scroll position on page load
reveal__up();





// Fade left
function reveal__left() {
    // Find all reveal-up elements
    var reveals = document.querySelectorAll(".reveal-left");

    // Loop through all of them
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

        // If the element is in within the screen
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal__left);

// To check the scroll position on page load
reveal__left();



// Fade left
function reveal__right() {
    // Find all reveal-up elements
    var reveals = document.querySelectorAll(".reveal-right");

    // Loop through all of them
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

        // If the element is in within the screen
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal__right);

// To check the scroll position on page load
reveal__right();