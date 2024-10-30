// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })

  const sliderContainer = document.querySelector('.slider-container');
  const images = sliderContainer.querySelectorAll('img');
    let currentIndex = 0;
    const interval = 2500; // Adjust interval for slide duration

  function slideNext() {
    currentIndex = (currentIndex + 1) % images.length;
    const translateX = -currentIndex * sliderContainer.offsetWidth;
    sliderContainer.style.transform = `translateX(${translateX}px)`;
  }
  setInterval(slideNext, interval);
