export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    
    // if (validadores[tipoDeInput]) {
    //   validadores[tipoDeInput](input);
    // }
  
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-menssage-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-menssage-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
  }
  
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  
  const mensajesDeError = {
   
    categoria: {
      valueMissing: "El campo categoria no puede estar vacío",
    //   typeMismatch: "El correo no es válido",
    },
    name: {
      valueMissing: "El campo nombre producto no puede estar vacío",
      
    },
    email: {
      valueMissing: "El campo email no puede estar vacio",
      patternMismatch:"El formato requerido es xxxxxxx@xxxxx.xxx",
    },
    contraseña:{
      valueMissing: "El campo contraseña no puede estar vacio",
      patternMismatch:
        "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    price: {
      valueMissing: "Este campo no puede estar vacío",
      // patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
    },
    description: {
      valueMissing: "Este campo no puede estar vacío",
     
    },
   
  };
  
//   const validadores = {
//     nacimiento: (input) => validarNacimiento(input),
//   };
  
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
  
