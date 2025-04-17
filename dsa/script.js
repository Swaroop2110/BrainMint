// // Theme toggle (light/dark mode)
// const toggleBtn = document.getElementById("theme-toggle");
// const body = document.body;

// toggleBtn.addEventListener("click", () => {
//   body.classList.toggle("dark-theme");
//   toggleBtn.textContent = body.classList.contains("dark-theme") ? "☀️" : "🌙";
// });

// // Login form submission (frontend only)
// const loginForm = document.getElementById("login-form");
// if (loginForm) {
//   loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Login submitted (frontend only)");
//   });
// }

// // Signup form submission (frontend only)
// const signupForm = document.getElementById("signup-form");
// if (signupForm) {
//   signupForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Signup submitted (frontend only)");
//   });
// }

// // Fade-in animation on scroll using Intersection Observer
// const faders = document.querySelectorAll(".fade-in");
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//     }
//   });
// }, {
//   threshold: 0.1
// });

// faders.forEach((el) => observer.observe(el));

// Theme toggle (light/dark mode)





// const toggleBtn = document.getElementById("theme-toggle");
// const body = document.body;

// if (toggleBtn) {
//   toggleBtn.addEventListener("click", () => {
//     body.classList.toggle("dark-theme");
//     toggleBtn.textContent = body.classList.contains("dark-theme") ? "☀️" : "🌙";
//   });
// }

// // Handle Login Form Submission
// const loginForm = document.getElementById("login-form");
// if (loginForm) {
//   loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Login submitted (frontend only)");
//   });
// }

// // Handle Signup Form Submission
// const signupForm = document.getElementById("signup-form");
// if (signupForm) {
//   signupForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Signup submitted (frontend only)");
//   });
// }

// // Fade-in Animation using IntersectionObserver
// const faders = document.querySelectorAll(".fade-in");
// if ('IntersectionObserver' in window) {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target); // Optional: only animate once
//       }
//     });
//   }, { threshold: 0.1 });

//   faders.forEach((el) => observer.observe(el));
// }



// Theme toggle (light/dark mode)
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Apply saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    const isDark = body.classList.contains("dark-theme");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Login form submission (frontend only)
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login submitted (frontend only)");
  });
}

// Signup form submission (frontend only)
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Signup submitted (frontend only)");
  });
}

// Fade-in animation on scroll using Intersection Observer
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

faders.forEach((el) => observer.observe(el));
