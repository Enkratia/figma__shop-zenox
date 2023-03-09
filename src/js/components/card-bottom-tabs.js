import vars from "../_vars";

vars.$cardDescrLink.forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".card-description__content--active").classList.remove("card-description__content--active");
    document.querySelector(".card-description__link--active").classList.remove("card-description__link--active");
    
    let target = e.currentTarget.getAttribute("href");
    e.currentTarget.classList.add("card-description__link--active");

    document.querySelector(`[data-target="${target}"]`).classList.add("card-description__content--active");
  });
}); 