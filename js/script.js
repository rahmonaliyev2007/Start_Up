
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 5) { 
    navbar.classList.add('scrolled'); 


  } else {
    navbar.classList.remove('scrolled');
  }
});



function scrollToSection1() {
    const targetElement = document.getElementById('section1');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  const targetElement = document.getElementById('contact');
  targetElement.scrollIntoView({ behavior: 'smooth' });
}



const toggles = document.querySelectorAll('.toggle');
const sections = document.querySelectorAll('.section');


sections[0].classList.add('active');

toggles.forEach((toggle, index) => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault(); 


    sections.forEach(section => {
      section.classList.remove('active');
    });

    sections[index].classList.add('active');

    toggles.forEach(toggle => {
      toggle.classList.remove('active');
    });

    toggles[index].classList.add('active');
  });
});



