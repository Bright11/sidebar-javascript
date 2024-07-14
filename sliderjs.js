document.addEventListener('DOMContentLoaded', function() {
    // Select all the .myimage elements and store them in the images variable
    const images = document.querySelectorAll('.myimage');
    // Select the .container element and store it in the container variable
    const container = document.querySelector('.container');
    // Select the .prev and .next buttons and store them in the prevBtn and nextBtn variables
    const prevBtn = document.querySelector('.slider_btn .prev');
    const nextBtn = document.querySelector('.slider_btn .next');
    // Initialize the currentIndex variable to keep track of the currently displayed image
    let currentIndex = 0;
    // Store the intervalId returned by setInterval to be able to clear the interval later
    let intervalId;
    // Flag to track whether the user is hovering over the container
    let isHovered = false;
  
    // Function to display the image at the specified index
    function showImage(index) {
      // Loop through all the images and set their display property based on the index
      images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
      });
    }
  
    // Function to start the automatic sliding of the carousel
    function startSlider() {
      // Set an interval that will be executed every 3 seconds (adjust as needed)
      intervalId = setInterval(() => {
        // Check if the user is not hovering over the container
        if (!isHovered) {
          // Increment the currentIndex, wrapping around to 0 when it reaches the end
          currentIndex = (currentIndex + 1) % images.length;
          // Display the image at the updated currentIndex
          showImage(currentIndex);
        }
      }, 3000);
    }
  
    // Function to stop the automatic sliding of the carousel
    function stopSlider() {
      // Clear the interval to pause the sliding
      clearInterval(intervalId);
    }
  
    // Function to display the previous image
    function prevImage() {
      // Decrement the currentIndex, wrapping around to the last index if necessary
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      // Display the image at the updated currentIndex
      showImage(currentIndex);
    }
  
    // Function to display the next image
    function nextImage() {
      // Increment the currentIndex, wrapping around to 0 when it reaches the end
      currentIndex = (currentIndex + 1) % images.length;
      // Display the image at the updated currentIndex
      showImage(currentIndex);
    }
  
    // Display the first image initially
    showImage(currentIndex);
    // Start the automatic sliding
    startSlider();
  
    // Add event listeners to the container to handle hover events
    container.addEventListener('mouseenter', () => {
      // Set the isHovered flag to true when the user hovers over the container
      isHovered = true;
      // Stop the automatic sliding
      stopSlider();
    });
  
    container.addEventListener('mouseleave', () => {
      // Set the isHovered flag to false when the user moves the mouse away from the container
      isHovered = false;
      // Start the automatic sliding again
      startSlider();
    });
  
    // Add event listeners to the "Previous" and "Next" buttons
    prevBtn.addEventListener('click', () => {
      // Stop the automatic sliding
      stopSlider();
      // Display the previous image
      prevImage();
      // Start the automatic sliding again
      startSlider();
    });
  
    nextBtn.addEventListener('click', () => {
      // Stop the automatic sliding
      stopSlider();
      // Display the next image
      nextImage();
      // Start the automatic sliding again
      startSlider();
    });
  });
  