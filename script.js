const aboutLink = document.querySelector(".page-header li:nth-child(1) a");
const aboutClose = document.querySelector(".about-close");
const aboutWindowOpened = "about-window-opened";

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle(aboutWindowOpened);
});

aboutClose.addEventListener("click", () => {
  document.body.classList.toggle(aboutWindowOpened);
});

const skillsLink = document.querySelector(".page-header li:nth-child(2) a"); //Skills
const skillsClose = document.querySelector(".skills-close");
const windowOpened = "window-opened";

skillsLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle(windowOpened);
});

skillsClose.addEventListener("click", () => {
  document.body.classList.toggle(windowOpened);
});

const projectsLink = document.querySelector(".page-header li:nth-child(3) a");
const projectsClose = document.querySelector(".projects-close");
const projectsWindowOpened = "projects-window-opened";

projectsLink.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle(projectsWindowOpened);
});

projectsClose.addEventListener("click", () => {
  document.body.classList.toggle(projectsWindowOpened);
});
