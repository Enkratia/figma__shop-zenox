import vars from "../_vars";

if (vars.$mobileFiltersOpen) {
  let openFilters = false;

  vars.$mobileFiltersOpen.addEventListener("click", (e) => {
    if (!openFilters) {
      vars.$mobileFiltersOpen.querySelector("span").textContent = "Close Filters";
      vars.$catalogFilters.classList.add("catalog-filters--open");
      openFilters = true;
    } else {
      vars.$mobileFiltersOpen.querySelector("span").textContent = "Filters";
      vars.$catalogFilters.classList.remove("catalog-filters--open");
      openFilters = false;
    }
  });
}