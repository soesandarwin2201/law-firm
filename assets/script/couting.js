// Select all the banner text elements
let valueDisplays = document.querySelectorAll(".banner-text");

// Set the interval for counting animation
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let startValue = 0;

  // Function to update the value display
  function updateValue() {
    valueDisplay.textContent = startValue;
    if (startValue < endValue) {
      startValue += 1;
      requestAnimationFrame(updateValue);
    }
  }

  // Initial call to start the counting animation
  updateValue();

  // Function to check if the banner section is in view
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom >= 0 && rect.top <= window.innerHeight;
  }

  // Function to handle scroll events
  function handleScroll() {
    if (isInViewport(valueDisplay)) {
      // Reset the counting animation when in view
      startValue = 0;
      updateValue();
    }
  }

  // Attach the scroll event listener to each valueDisplay
  window.addEventListener("scroll", handleScroll);

  // Trigger an initial check when the page loads
  handleScroll();
});
