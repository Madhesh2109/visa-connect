const text = "Your Gateway to Global Travel";
const typingElement = document.getElementById("typing");

let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    typingElement.textContent = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();
