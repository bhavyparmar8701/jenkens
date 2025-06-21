// Highlight section when in view
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 150;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      section.style.backgroundColor = "#fff5ee";
    } else {
      section.style.backgroundColor = "#fff";
    }
  });
});
