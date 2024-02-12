document.addEventListener('DOMContentLoaded', () => {
  const signInButton = document.querySelector('.signin-button');

  signInButton.addEventListener('mouseover', () => {
    signInButton.classList.add('pulse');
  });

  signInButton.addEventListener('mouseout', () => {
    signInButton.classList.remove('pulse');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  
  const themeSelector = document.getElementById('themeColorSelect');

  themeSelector.addEventListener('change', (event) => {
    const selectedColor = event.target.value;

    
    document.querySelectorAll('.signin-button, .primary-button').forEach(button => {
      button.style.backgroundColor = selectedColor;
      button.style.borderColor = selectedColor;
    });

    
    document.querySelector('.navbar').style.backgroundColor = selectedColor;
    document.querySelector('.netflix-bg-overlay').style.backgroundColor = `rgba(${hexToRgb(selectedColor)}, 0.4)`;
  });
});


function hexToRgb(hex) {
  let r = 0, g = 0, b = 0;
  // 3 digits
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `${r}, ${g}, ${b}`;
}


let accordian = document.getElementsByClassName("FAQ-title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


