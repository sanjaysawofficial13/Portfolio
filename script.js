const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
document.querySelector('.nav-links a[href="#home"]')?.classList.add("active");

document.addEventListener("DOMContentLoaded", () => {

  const texts = [
    "I'm a Frontend Developer",
    "I'm a Full Stack Enthusiast",
    "I'm a Competitive Programmer",
    "I'm a Problem Solver",
    "I'm an Open Source Contributor",
    "I'm a Tech Explorer",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing-text");

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      charIndex++;
    } else {
      charIndex--;
    }

    typingElement.textContent = currentText.slice(0, charIndex);

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      speed = 1500;
      isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  window.openModal = id => {
    document.getElementById(id).style.display = "flex";
  };

  window.closeModal = id => {
    document.getElementById(id).style.display = "none";
  };


  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
      }

      alert("Message sent successfully! ");
      this.reset();
    });
  }

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => observer.observe(section));


  const themes = [
    "#ffcc00",
    "#00ffd5",
    "#7c7cff",
    "#00ff88",
    "#ff6b6b",
    "#f472b6"
  ];

  let themeIndex = localStorage.getItem("themeIndex") || 0;

  document.documentElement.style.setProperty(
    "--theme-color",
    themes[themeIndex]
  );

  const toggleBtn = document.getElementById("themeToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      themeIndex = (Number(themeIndex) + 1) % themes.length;
      localStorage.setItem("themeIndex", themeIndex);
      document.documentElement.style.setProperty(
        "--theme-color",
        themes[themeIndex]
      );
    });
  }

});
