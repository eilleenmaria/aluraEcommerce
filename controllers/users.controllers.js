import { userService } from "../service/users-service.js";


const formulario= document.querySelector("[data-formUser]");
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const user = document.querySelector("[data-user]").value
    console.log(user)
    const email = document.querySelector("[data-email]").value;
    console.log(email)
    const password = document.querySelector("[data-password]").value;
    console.log(password)
    userService.crearUsers(user,email,password).then(()=>{
        window.location.href = "../screens/registro_exitoso.html";
    }) .catch((err) =>alert(err) );
})