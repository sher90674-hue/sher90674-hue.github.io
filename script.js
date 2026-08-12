document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar nav");
  const toggle = document.querySelector(".menu-toggle");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener("click", event => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || link.target === "_blank") return;
      event.preventDefault();
      document.body.classList.add("leaving");
      setTimeout(() => window.location.href = href, 220);
    });
  });
});