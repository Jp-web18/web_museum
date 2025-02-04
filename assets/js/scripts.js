document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('fade-in');
      } else {
        entry.target.classList.remove('fade-in');
        entry.target.classList.add('hidden');
      }
    });
  }, {
    threshold: 0.5 // Adjust to trigger when the section is 50% in view
  });

  elements.forEach(element => observer.observe(element));
});

// Navigation Click Handlers
const sections = [
  { id: "weapons", page: "/bootstrap-5.3.3-examples/album/weapons.html" },
  { id: "clothing", page: "/bootstrap-5.3.3-examples/album/clothing.html" },
  { id: "musical_instruments", page: "musical.html" },
  { id: "culture", page: "culture.html" },
  { id: "paintings", page: "paintings.html" },
  { id: "people", page: "people.html" },
];

sections.forEach(({ id, page }) => {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener("click", () => {
      window.location.href = page;
    });
  }
});


function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}
