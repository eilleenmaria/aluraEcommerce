import { userService } from "../service/users-service.js";

const formulario= document.querySelector("[data-formUser]");
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const user = document.querySelector("[data-nameUser]")
    const email = document.querySelector("[data-email]");
    const password = document.querySelector("[data-password]");
    userService.crearUsers(user,email,password).then(()=>{
        window.location.href = "../screens/registro_exitoso.html";
    })
})