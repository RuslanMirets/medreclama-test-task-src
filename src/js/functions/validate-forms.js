import JustValidate from "just-validate";
import Inputmask from "inputmask";

// const test = document.querySelector(".form__body");
// test.classList.remove("visible");

export const validateForms = (selector, rules) => {
  const form = document?.querySelector(selector);
  const textSelector = form?.querySelector('input[type="text"]');
  const telSelector = form?.querySelector('input[type="tel"]');
  const formTitle = form.querySelector(".form__title");
  const formBody = form.querySelector(".form__body");
  const formResult = form.querySelector(".form__result");

  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

  if (!rules) {
    console.error("Вы не передали правила валидации!");
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask("+7 (999) 999-99-99", {
      showMaskOnHover: false,
    });
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: "function",
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError,
        });
      }
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((e) => {
    formTitle.innerHTML = "Спасибо!";

    formBody.classList.remove("visible");
    formResult.classList.add("visible");

    textSelector.value = "";
    textSelector.setAttribute("value", "");
    telSelector.value = "";
    telSelector.setAttribute("value", "");
  });
};
