import { userService } from "../service/users-service.js";

const comprobarSeccionUser= async () => {
    const userIdSeccion = JSON.parse(sessionStorage.getItem("userId"));
    const userDataBase = await userService.readUser(userIdSeccion);
  
    if (userIdSeccion == null || userDataBase.id == undefined) {
      return false;
    }
  
    return userIdSeccion == userDataBase.id;
    
  };
  
const isAlreadyUser = await comprobarSeccionUser();
if(isAlreadyUser){
    alert("Su sesion ya ha iniciado")
    window.location.href= "../screens/registrar-producto.html"
}

async function validarCredencialUser(thisEmail, thisPassword){
     new Promise((resolve)=>{    
      userService.listUsers().then((data)=>{        
        data.forEach(({email, password,id}) => {
            if(thisEmail==email && thisPassword==password){
                sessionStorage.setItem("userId", JSON.stringify(id));
                return true
            }
        });
      }).catch((error) => console.log( error));  
      return false
    })
};

const formulario = document.querySelector("[data-formlogin]");
formulario.addEventListener("submit", async (evento)=>{
    evento.preventDefault();
    const email =document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;
    const validarUser = await validarCredencialUser(email,password);
    if( validarUser){
        window.location.href= "../screens/registrar-producto.html"

    }else{
        alert("Las credenciales son invalidas, intenta nuevamente");
    }
});