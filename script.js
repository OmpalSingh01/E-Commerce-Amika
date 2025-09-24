const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

let scrollSteps = 0;
let lastScrollTop = 0;

// Show popup initially
popup.style.display = "block";
overlay.style.display = "block";



// Function to close popup with fade-out
function closePopup() {
  popup.classList.add("hide");
  overlay.classList.add("hide");

  // Wait for CSS transition to finish, then hide completely
  setTimeout(() => {
    popup.style.display = "none";
    overlay.style.display = "none";
  }, 500); // matches transition duration
}

// Close on button click
closeBtn.addEventListener("click", closePopup);

// Close on scrolling twice (big scrolls)
window.addEventListener("scroll", () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (Math.abs(st - lastScrollTop) > 50) {
    scrollSteps++;
    lastScrollTop = st;
    if (scrollSteps >= 2) {
      closePopup();
    }
  }
});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight * 0.8;

  sections.forEach(section => {
    if (scrollY > section.offsetTop) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.8s ease";
    }
  });
});