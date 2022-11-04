import Inputmask from "inputmask";

const telSelector = document.querySelector('input[type="tel"]');

const inputMask = new Inputmask("+7 (999) 999-99-99", {
  showMaskOnHover: false,
});
inputMask.mask(telSelector);

// const rules = [
//   {
//     ruleSelector: ".input-tel",
//     tel: true,
//     telError: "Введите корректный телефон",
//     rules: [
//       {
//         rule: "required",
//         value: true,
//         errorMessage: "Заполните телефон!",
//       },
//     ],
//   },
// ];

// for (let item of rules) {
//   if (item.tel) {
//     item.rules.push({
//       rule: "function",
//       validator: function () {
//         const phone = telSelector.inputmask.unmaskedvalue();
//         return phone.length === 10;
//       },
//     });
//   }
// }
