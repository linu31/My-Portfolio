window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

  
    function sendMessage(e) {
      e.preventDefault();
      const form = e.target;
      alert(`Message Sent! Thank you, ${form.name.value}. I'll get back to you soon.`);
      form.reset();
    }

    
    document.getElementById("year").innerText = new Date().getFullYear();

   
    function initAOS() {
      const elements = document.querySelectorAll('[data-aos]');
      
      function checkPosition() {
        elements.forEach(element => {
          const position = element.getBoundingClientRect();
          
          
          if (position.top < window.innerHeight * 0.75) {
            element.classList.add('aos-animate');
          }
        });
      }
      
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('load', checkPosition);
      checkPosition(); 
    }
    
    
    document.addEventListener('DOMContentLoaded', initAOS);