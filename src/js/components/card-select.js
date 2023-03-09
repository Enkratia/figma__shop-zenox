import vars from "../_vars";

if (vars.$colorSelect) {
  vars.$colorSelect.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-select__btn")) {
  
      const color = e.target.dataset.color;
      e.currentTarget.querySelector(".color-select__selected span").textContent = color;
  
      document.querySelector(".color-select__btn--active").classList.remove("color-select__btn--active");
      e.target.classList.add("color-select__btn--active");
    }
  });
}

if (vars.$sizeSelect) {
  let size = "";
  
  vars.$sizeSelect.addEventListener("click", (e) => {
    if (e.target.classList.contains("size-select__btn")) {
  
      e.currentTarget.querySelector(".size-select__clear").style.display = "inline-flex";
  
      e.target.classList.toggle("size-select__btn--active");
  
      if (e.target.classList.contains("size-select__btn--active")) {
        let currentSize = e.target.textContent;
        size += currentSize.trim() + ", ";
        console.log(size)
  
      } else {
        let currentSize = e.target.textContent.trim();
        size = size.replace(currentSize + ", ", "");
      }
  
      e.currentTarget.querySelector(".size-select__selected span").textContent = size;
  
      if (!size) {
        e.currentTarget.querySelector(".size-select__selected span").textContent = "Select a size";
      }
    }
  
    if (e.target.classList.contains("size-select__clear")) {
      document.querySelectorAll(".size-select__btn--active").forEach(el => el.classList.remove("size-select__btn--active"));
      e.currentTarget.querySelector(".size-select__selected span").textContent = "Select a size";
      size = "";
      e.target.style.display = "none";
    }
  });
}
  

