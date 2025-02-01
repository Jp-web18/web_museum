// FUNCTIONS TO HANDLE THE NAVIGATION CLICKS
document.getElementById("weapons").onclick = function () {
  window.location.href = "weapons.html"; // Redirects to the target page
};

document.getElementById("clothing").onclick = function () {
  window.location.href = "clothing.html"; // Redirects to the target page
};

document.getElementById("musical_instruments").onclick = function () {
  window.location.href = "musical.html"; // Redirects to the target page
};

document.getElementById("culture").onclick = function () {
  window.location.href = "culture.html"; // Redirects to the target page
};

document.getElementById("paintings").onclick = function () {
  window.location.href = "paintings.html"; // Redirects to the target page
};

document.getElementById("people").onclick = function () {
  window.location.href = "people.html"; // Redirects to the target page
};


// FUNCTION TO HANDLE THE NAVIGATION MENU
// Function to handle delayed appearance of elements
const revealElements = () => {
  const elements = document.querySelectorAll(".hidden"); // Select all elements with the 'hidden' class

  const options = {
    root: null, // Use the viewport as the root
    threshold: 0.2, // Trigger the animation when 20% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add delay for each element (500ms for each)
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 500);
      } else {
        // Reset content to hidden state when it's out of focus
        entry.target.classList.remove("visible");
        setTimeout(() => {
          entry.target.classList.add("hidden");
        }, 500);
      }
    });
  }, options);

  elements.forEach((element) => {
    observer.observe(element); // Start observing each element
  });
};

// Call the function to activate the Intersection Observer
revealElements();
