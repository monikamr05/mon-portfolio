(function () {
  "use strict";

  var EMAIL = "monikamr2004@email.com";
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.documentElement.classList.add("js-ready");

  // Theme
  var html = document.documentElement;
  var themeBtns = document.querySelectorAll("[data-theme-toggle]");

  function setTheme(theme) {
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    updateThemeIcons(theme);
  }

  function updateThemeIcons(theme) {
    themeBtns.forEach(function (btn) {
      var sun = btn.querySelector(".icon-sun");
      var moon = btn.querySelector(".icon-moon");
      if (sun && moon) {
        sun.style.display = theme === "dark" ? "block" : "none";
        moon.style.display = theme === "dark" ? "none" : "block";
      }
      var label = btn.querySelector(".theme-label");
      if (label) {
        label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
      }
    });
  }

  setTheme(localStorage.getItem("theme") || "dark");

  themeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setTheme(html.classList.contains("dark") ? "light" : "dark");
    });
  });

  // Mobile menu
  var menuBtn = document.getElementById("menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");

  function closeMobileMenu() {
    if (!mobileMenu || !menuBtn) return;
    mobileMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    var openIcon = menuBtn.querySelector(".icon-open");
    var closeIcon = menuBtn.querySelector(".icon-close");
    if (openIcon) openIcon.style.display = "block";
    if (closeIcon) closeIcon.style.display = "none";
    document.body.style.overflow = "";
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      var openIcon = menuBtn.querySelector(".icon-open");
      var closeIcon = menuBtn.querySelector(".icon-close");
      if (openIcon) openIcon.style.display = isOpen ? "none" : "block";
      if (closeIcon) closeIcon.style.display = isOpen ? "block" : "none";
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  });

  // Navbar scroll + scroll spy
  var navbar = document.getElementById("navbar");
  var ticking = false;

  function onScroll() {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);

    var backToTop = document.getElementById("back-to-top");
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 400);

    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");
    var current = "home";
    var offset = 130;

    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= offset) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();

  document.getElementById("back-to-top")?.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  // Scroll reveal
  function revealAll() {
    document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
      el.classList.add("visible");
    });
    document.querySelectorAll(".skill-fill:not(.animate)").forEach(function (el) {
      el.classList.add("animate");
    });
  }

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.getAttribute("data-delay") || "0";
            entry.target.style.transitionDelay = delay + "s";
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      revealObserver.observe(el);
    });

    var skillObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".skill-fill").forEach(function (el) {
      skillObserver.observe(el);
    });
  } else {
    revealAll();
  }

  // Safety fallback for Netlify / slow networks
  setTimeout(revealAll, 2500);

  // Profile image fallback
  var profileImg = document.getElementById("profile-img");
  var profileFallback = document.getElementById("profile-fallback");

  if (profileImg) {
    profileImg.addEventListener("error", function () {
      profileImg.style.display = "none";
      if (profileFallback) profileFallback.classList.add("show");
    });
    if (profileImg.complete && profileImg.naturalWidth === 0) {
      profileImg.style.display = "none";
      if (profileFallback) profileFallback.classList.add("show");
    }
  }

  // Subtle typing effect for hero role
  var typedEl = document.getElementById("typed-role");
  if (typedEl && !prefersReducedMotion) {
    var roles = [
      "MCA Student",
      "Frontend Developer",
      "Python Programmer",
      "Aspiring Software Engineer",
    ];
    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function typeTick() {
      var current = roles[roleIndex];
      if (!deleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeTick, 1800);
          return;
        }
      } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(typeTick, deleting ? 40 : 70);
    }

    setTimeout(typeTick, 1200);
  }

  // Contact form
  var contactForm = document.getElementById("contact-form");
  var submitBtn = document.getElementById("submit-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      var name = data.get("name");
      var email = data.get("email");
      var subject = data.get("subject");
      var message = data.get("message");

      window.location.href =
        "mailto:" +
        EMAIL +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);

      if (submitBtn) {
        var original = submitBtn.innerHTML;
        submitBtn.textContent = "Opening email…";
        setTimeout(function () {
          submitBtn.innerHTML = original;
          contactForm.reset();
        }, 3000);
      }
    });
  }
})();
