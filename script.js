
    // Hero Slider Functionality
    document.addEventListener('DOMContentLoaded', function() {
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.slider-dot');
      let currentSlide = 0;
      const slideInterval = 5000; // 5 seconds
      
      // Function to show a specific slide
      function showSlide(index) {
        // Mark current active slide for exit animation
        slides.forEach(slide => {
          if (slide.classList.contains('active')) {
            slide.classList.add('exit');
            setTimeout(() => {
              slide.classList.remove('active');
              slide.classList.remove('exit');
            }, 800);
          }
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
          dot.classList.remove('active');
        });
        
        // Show the selected slide and activate the corresponding dot
        setTimeout(() => {
          slides[index].classList.add('active');
          dots[index].classList.add('active');
        }, 50);
        
        // Update current slide index
        currentSlide = index;
      }
      
      // Auto slide change
      function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
          next = 0;
        }
        showSlide(next);
      }
      
      // Set up dot click handlers
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          showSlide(index);
          resetInterval();
        });
      });
      
      // Start the automatic slideshow
      let slideTimer = setInterval(nextSlide, slideInterval);
      
      // Reset the slideshow interval when manually changing slides
      function resetInterval() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, slideInterval);
      }
      
      // Form Submission
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;
          
          // Here you would typically send the form data to your server
          // For demonstration, we'll just show an alert
          alert(`Thank you for your message, ${name}! We will get back to you soon.`);
          
          // Reset the form
          contactForm.reset();
        });
      }
      
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Sticky header on scroll
      const header = document.querySelector('.main-header');
      const headerOffset = header.offsetTop;
      
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > headerOffset) {
          header.style.position = 'fixed';
          header.style.top = '0';
          header.style.width = '100%';
          header.style.zIndex = '1000';
          document.body.style.paddingTop = header.offsetHeight + 'px';
        } else {
          header.style.position = '';
          header.style.top = '';
          document.body.style.paddingTop = '0';
        }
      });
    });
  


