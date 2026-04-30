// Typewriter effect on homepage (index.html)
document.addEventListener('DOMContentLoaded', () => {
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const fullText = "Initializing Secure Connection...";
    let i = 0;
    function typeWriter() {
      if (i < fullText.length) {
        typedEl.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
      } else {
        // After typing, show Access Granted message
        const accessDiv = document.getElementById('access-message');
        if (accessDiv) {
          setTimeout(() => {
            accessDiv.innerHTML = "➤ ACCESS GRANTED. WELCOME TO CYBER VAULT. <i class='fas fa-check-circle'></i>";
            accessDiv.style.animation = "glowPulse 0.8s ease";
          }, 300);
        }
      }
    }
    typedEl.textContent = "";
    typeWriter();
  }

  // Contact form handling (simple client-side)
  const contactForm = document.getElementById('consoleForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('msg').value.trim();
      const feedbackDiv = document.getElementById('form-feedback');
      if (!name || !email || !msg) {
        feedbackDiv.innerHTML = "<span style='color:#ff7777'>[ERROR] All fields required.</span>";
        return;
      }
      if (!email.includes('@')) {
        feedbackDiv.innerHTML = "<span style='color:#ffaa77'>[WARNING] Invalid email format.</span>";
        return;
      }
      feedbackDiv.innerHTML = "<span style='color:#0f6'>[SUCCESS] Encrypted transmission sent (demo). Stay safe.</span>";
      contactForm.reset();
      setTimeout(() => feedbackDiv.innerHTML = "", 3000);
    });
  }
});
