document.getElementById("weapons").onclick = function () {
  window.location.href = "weapons.html"; // Redirects to the target page
};

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
