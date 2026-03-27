document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // MODAL GALLERY
  // =========================
  const images = [
    "images/Bad up skillz doogles driemo 2 final.jpg",
    "images/EMMU DEE JETU PANGOLIN final.jpg",
    "images/UMP AWARDS WINNERS NAMADINGO.jpg",
    "images/GAMBLING IMPACT 222.jpg",
    "images/EDGERS LODGE GIBO PEARSON fnll mock.jpg",
    "images/CHITOLIRO UMP  ARTIST IG ZARI.jpg",
    "images/Christmas Party.jpg",
    "images/umodzi logo.jpg",
    "images/ZONKE 4 SALE fnl.jpg",
    "images/Free Curved Paper Logo Mockup.jpg"
  ];

  let currentIndex = 0;

  window.openModal = function (src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    if (!modal || !modalImg) return;

    currentIndex = images.indexOf(src);
    if (currentIndex < 0) currentIndex = 0;

    modal.style.display = "flex";
    modalImg.src = src;
  };

  window.closeModal = function () {
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
  };

  window.nextImage = function () {
    const modalImg = document.getElementById("modal-img");
    if (!modalImg || !images.length) return;

    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex];
  };

  window.prevImage = function () {
    const modalImg = document.getElementById("modal-img");
    if (!modalImg || !images.length) return;

    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex];
  };

  // =========================
  // PORTFOLIO FILTER
  // =========================
  const filterButtons = document.querySelectorAll(".portfolio-filter button");
  const works = document.querySelectorAll(".work");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      works.forEach((work) => {
        if (filter === "all" || work.classList.contains(filter)) {
          work.style.display = "block";
        } else {
          work.style.display = "none";
        }
      });
    });
  });

  // =========================
  // REVEAL ANIMATION
  // =========================
  const reveals = document.querySelectorAll(".reveal");

  function revealSections() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();

  // =========================
  // MOBILE MENU
  // =========================
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // =========================
  // SCROLL PROGRESS BAR
  // =========================
  const progressBar = document.getElementById("progress-bar");

  window.addEventListener("scroll", () => {
    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
  });

  // =========================
  // THEME TOGGLE
  // =========================
  const themeBtn = document.getElementById("theme-toggle");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }

  // =========================
  // LENIS SMOOTH SCROLL
  // =========================
  let lenis = null;

  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target);
        }
      });
    });
  }

  // =========================
  // EMAILJS CONTACT FORM
  // =========================
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (window.emailjs) {
    emailjs.init("tGfbFkj5MBrnNaCBY");
  }

  if (form && window.emailjs) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (formMessage) {
        formMessage.innerText = "Sending message...";
        formMessage.style.color = "#D4AF37";
      }

      emailjs
        .sendForm("service_c2y2z0b", "template_203vw6r", this)
        .then(() => {
          if (formMessage) {
            formMessage.innerText = "Message sent successfully 🎉";
            formMessage.style.color = "lightgreen";
          }
          form.reset();
        })
        .catch(() => {
          if (formMessage) {
            formMessage.innerText = "Failed to send message. Please try again.";
            formMessage.style.color = "red";
          }
        });
    });
  }

  // =========================
  // PAGE LOADER
  // =========================
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (!loader) return;

    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 400);
    }, 600);
  });

  // =========================
  // PARTICLES
  // =========================
  const canvas = document.getElementById("particles");

  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
      constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) {
          this.size -= 0.01;
        }
      }

      draw() {
        ctx.fillStyle = "#D4AF37";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function createParticles(e) {
      for (let i = 0; i < 3; i++) {
        particlesArray.push(
          new Particle(
            e.clientX,
            e.clientY,
            Math.random() * 5,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          )
        );
      }
    }

    window.addEventListener("mousemove", createParticles);

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.3) {
          particlesArray.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // =========================
  // MAGNETIC HERO BUTTON
  // =========================
  document.querySelectorAll(".hero-btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0,0) scale(1)";
    });
  });
  
  // =========================
  // PAGE TRANSITION
  // =========================
  window.addEventListener("beforeunload", () => {
    const pageTransition = document.getElementById("page-transition");
    if (pageTransition) {
      pageTransition.style.transform = "scaleY(1)";
    }
  });

  // =========================
  // LOAD MORE WORKS
  // =========================
  const loadBtn = document.getElementById("loadMore");

  if (loadBtn) {
    loadBtn.addEventListener("click", () => {
      document.querySelectorAll(".work.hidden").forEach((el, index) => {
        if (index < 6) {
          el.classList.remove("hidden");
        }
      });

      loadBtn.style.display = "none";
    });
  }

  // =========================
  // STATS COUNTER
  // =========================
  const counters = document.querySelectorAll(".counter");

  function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = target / 100;

    function update() {
      count += speed;

      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+";
      }
    }

    update();
  }

  if ("IntersectionObserver" in window && counters.length > 0) {
    const statsObserver = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((counter) => statsObserver.observe(counter));
  } else {
    counters.forEach((counter) => {
      counter.innerText = counter.getAttribute("data-target") + "+";
    });
  }

  // =========================
  // SLIDER PAUSE ON VIEW
  // =========================
  const slider = document.querySelector(".slider-track");

  if (slider && "IntersectionObserver" in window) {
    const sliderObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        slider.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      });
    });

    sliderObserver.observe(slider);
  }
});