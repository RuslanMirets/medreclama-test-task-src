import { validateForms } from "../functions/validate-forms";

const rules = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 1,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон!",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

validateForms(".promo__form", rules);
