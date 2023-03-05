const primaryNav = document.querySelector(".primary_nav");
const navToggle = document.querySelector(".mobile_nav");

navToggle.addEventListener("click", ( ) => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  }
  if (visibility === "true") {
		 console.log(visibility)
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
})
