const skills = document.getElementById("skills");
const projects = document.getElementById("projects")
const textPath = document.getElementById("text-path")
const textContainer = document.getElementById("text-container")
const path = document.querySelector(textPath.getAttribute("href"))

const pathLength = path.getTotalLength()

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

const updateTextPathOffset = (offset) => {
  textPath.setAttribute("startOffset", offset)
}

updateTextPathOffset(pathLength)

const onScroll = () => {
  requestAnimationFrame(() => {
    const rect = textContainer.getBoundingClientRect()
    const scrollPercent = rect.y / window.innerHeight
    updateTextPathOffset(scrollPercent * 2 *  pathLength)
  })
}

window.addEventListener("scroll", onScroll)