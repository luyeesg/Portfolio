const skills = document.getElementById("skills");
const projects = document.getElementById("projects")

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled >= 525) {
    skills.classList.add("skills-animation");
  }

  if(scrolled >= 2270) {
   projects.classList.add("projects-animation")
  }
  console.log(scrolled);
});
