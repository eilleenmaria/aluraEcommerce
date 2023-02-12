import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll('input:not([type="file"])');

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

