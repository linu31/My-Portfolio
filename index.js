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
    
   
 
(function () {
  // 🔑 Your actual Public Key from EmailJS → Account → API Keys
  emailjs.init("QJTz62LW1i2f4h7fR");
})();

function sendMessage(e) {
  e.preventDefault(); // prevent page reload

  const form = e.target;
  const button = form.querySelector("button");

  // Change button text while sending
  button.disabled = true;
  button.textContent = "Sending...";

  // 🔑 Your actual Service ID & Template ID from EmailJS
  emailjs.sendForm("service_dhb4pun", "template_udc6noi", form)
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset(); // clear form
    })
    .catch((error) => {
      console.error("❌ EmailJS error:", error);
      alert("❌ Failed to send message. Please try again.");
    })
    .finally(() => {
      // Reset button after sending
      button.disabled = false;
      button.textContent = "Send Message";
    });
}
function toggleCerts() {
  const allCards = document.querySelectorAll('.cert-card');
  const btn = document.getElementById('viewMoreBtn');

  if (btn.textContent === "View More") {
    // Show all cards
    allCards.forEach(card => card.classList.remove('hidden'));
    btn.textContent = "View Less";
  } else {
    // Show only first 6 again
    allCards.forEach((card, index) => {
      if (index < 6) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
    btn.textContent = "View More";
  }
}

// Run once on page load to hide extras
window.onload = () => {
  const allCards = document.querySelectorAll('.cert-card');
  allCards.forEach((card, index) => {
    if (index >= 6) card.classList.add('hidden');
  });
};

// Theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  
  if (body.getAttribute('data-theme') === 'light') {
    body.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');
  const themeToggle = document.getElementById('theme-toggle');
  
  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    themeToggle.textContent = '☀️';
  }
});

