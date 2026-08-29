document.addEventListener("DOMContentLoaded", () => {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const updateTheme = (event) => {
    document.body.classList.toggle("dark-theme", event.matches);
  };

  updateTheme(darkModeQuery);
  if (darkModeQuery.addEventListener) {
    darkModeQuery.addEventListener("change", updateTheme);
  } else {
    darkModeQuery.addListener(updateTheme);
  }

  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0 });

  elements.forEach(el => {
    observer.observe(el);


    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("show");
    }
  });
});
