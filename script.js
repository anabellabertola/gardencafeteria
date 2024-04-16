

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const controls = document.querySelectorAll('.control');

  function showSlide(targetIndex) {
    slides.forEach((slide, index) => {
      if (index === targetIndex) {
        slide.classList.add('active');
        controls[index].classList.add('active');
      } else {
        slide.classList.remove('active');
        controls[index].classList.remove('active');
      }
    });
  }

  function nextSlide() {
    const currentSlide = document.querySelector('.slide.active');
    const currentIndex = Array.from(slides).indexOf(currentSlide);
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }



  function changeSlide(idx) {
    showSlide(idx);
  }

  showSlide(0);
  setInterval(nextSlide, 3000);

  controls.forEach((control, index) => {
    control.addEventListener('click', function() {
      changeSlide(index);
    });
  });
});


const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})
