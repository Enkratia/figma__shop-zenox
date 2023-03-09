import vars from "../_vars";

if (vars.$stepper) {
  const $stepperInput = vars.$stepper.querySelector(".stepper__input"),
    $stepperMinus = vars.$stepper.querySelector(".stepper__btn--minus"),
    $stepperPlus = vars.$stepper.querySelector(".stepper__btn--plus");
  
  $stepperInput.addEventListener("input", (e) => {
    if (parseInt(e.currentTarget.value) <= 1) {
      $stepperMinus.classList.add("stepper__btn--disabled");
    } else {
      $stepperMinus.classList.remove("stepper__btn--disabled");
    }
  
    if (parseInt(e.currentTarget.value) > 99998) {
      $stepperPlus.classList.add("stepper__btn--disabled");
    } else {
      $stepperPlus.classList.remove("stepper__btn--disabled");
    }
  }); 
  
  $stepperMinus.addEventListener("click", () => {
    $stepperPlus.classList.remove("stepper__btn--disabled");
    
    if (parseInt($stepperInput.value) <= 1) {
      $stepperMinus.classList.add("stepper__btn--disabled");
  
    } else {
      let currentValue = parseInt($stepperInput.value);
      currentValue--;
    
      if (currentValue <= 1) {
        $stepperMinus.classList.add("stepper__btn--disabled");
      }
  
      $stepperInput.value = currentValue;
    }
  });
  
  $stepperPlus.addEventListener("click", () => {
    $stepperMinus.classList.remove("stepper__btn--disabled");
  
    if (parseInt($stepperInput.value) > 99998) {
      $stepperPlus.classList.add("stepper__btn--disabled");
  
    } else {
      let currentValue = parseInt($stepperInput.value);
      currentValue++;
  
      if (currentValue > 99998) {
        $stepperPlus.classList.add("stepper__btn--disabled");
      }
  
      $stepperInput.value = currentValue;
    }
  
  });
}
