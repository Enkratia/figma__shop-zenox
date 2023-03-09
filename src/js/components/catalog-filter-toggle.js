import vars from "../_vars";

if (document.querySelector(".catalog")) {
  vars.$catalogFiltersTop.forEach(el => {
    el.addEventListener("click", (e) => {
      e.currentTarget.parentElement.classList.toggle("catalog-filter--open");
    });
  });
  
  vars.$hideFilters.addEventListener("click", () => {
    vars.$catalogFiltersTop.forEach(el => {
      el.parentElement.classList.remove("catalog-filter--open");
    });
  });
}
