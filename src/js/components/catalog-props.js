import vars from "../_vars";

if (document.querySelector(".catalog")) {
  vars.$freeDeliveryBtn.addEventListener("click", (e) => {
    e.target.closest(".free-delivery").style.display = "none";
  });

  vars.$catalogColumns.addEventListener("click", (e) => {
    if (e.target.classList.contains("catalog-columns__btn") || e.target.closest(".catalog-columns__item")) {
      let columns = e.target.dataset.columns;
      let columnsBtn = document.querySelectorAll(".catalog-columns__btn");

      columnsBtn.forEach(el => {
        el.classList.remove("catalog-columns__btn--current");
      });

      e.target.classList.add("catalog-columns__btn--current");

      vars.$catalogGridContent.dataset.gridColumns = columns;
    }
  });

  const createChoiceItem = (text) => {
    return (
      `<button class="btn-reset catalog-choice__item" data-choice-text="${text}">
          ${text}
          <svg xmlns='http://www.w3.org/2000/svg' aria-hidden="true">
            <use href='./img/svg/sprite.svg#close'></use>
          </svg>
      </button>`
    );
  };

  vars.$catalogFilterItems.forEach(el => {
    el.querySelector("input").addEventListener("change", () => {
      let checked = el.querySelector("input").checked;

      if (checked) {
        el.querySelector(".custom-checkbox").classList.add("custom-checkbox--active");
        let text = el.querySelector(".custom-checkbox__text").textContent;

        vars.$catalogChoice.insertAdjacentHTML("afterbegin", createChoiceItem(text.trim()));
        vars.$catalogChoice.style.display = "block";

      } else {
        el.querySelector(".custom-checkbox").classList.remove("custom-checkbox--active");
        let activeCheckBoxes = document.querySelectorAll(".custom-checkbox--active");
        // document.querySelector(`[data-choice-text=${text}]`).remove();
        let text = el.querySelector(".custom-checkbox__text").textContent.trim();
        document.querySelector(`[data-choice-text=${text}]`).remove();

        if (activeCheckBoxes.length > 0) {
          vars.$catalogChoice.style.display = "block";
        } else {
          vars.$catalogChoice.style.display = "none";
        }
      }

      const choiceLength = el.closest(".catalog-filter__items").querySelectorAll(".custom-checkbox--active").length;
      el.closest(".catalog-filter").querySelector(".catalog-filter__quantity").textContent = choiceLength;
    });
  });

  vars.$catalogChoice.addEventListener("click", (e) => {
    if (e.target.classList.contains("catalog-choice__item")) {
      e.target.remove();

      let text = e.target.textContent.trim();

      document.querySelector(`[data-text=${text}]`).querySelector("input").checked = false;
      document.querySelector(`[data-text=${text}]`).classList.remove("custom-checkbox--active");
    }

    if (e.target.classList.contains("catalog-choice__clear")) {
      console.log(e.target);
      Array.from(e.currentTarget.children).forEach(el => {
        if (!el.classList.contains("catalog-choice__clear")) {
          el.remove();
        }
      });

      vars.$catalogFilterItems.forEach(el => {
        el.querySelector("input").checked = false;
        el.querySelector(".custom-checkbox").classList.remove("custom-checkbox--active");
      });

      e.currentTarget.style.display = "none";
      document.querySelectorAll(".catalog-filter__quantity").forEach(el => {
        el.textContent = "0";
      });
    }

    if (vars.$catalogChoice.children.length === 1) {
      e.currentTarget.style.display = "none";
    }

  });
}

if (vars.$customSelect) {
  vars.$customSelect.forEach(el => {
    el.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("custom-select--open");
  
      if (e.target.classList.contains("custom-select__item")) {
        let text = e.target.textContent;
        e.currentTarget.querySelector(".custom-select__top").textContent = text;
      }
    });
  });
}


