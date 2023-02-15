import { userService } from "../service/users-service.js";
const validarCredencialUser= async(thisEmail, thisPassword) =>{    
      userService.listUsers().then((data)=>{        
        data.forEach(({email, password, id}) => {
          
            if(thisEmail==email && thisPassword==password && id== "1da52b77-fbdf-4e5e-a86d-d2e52954f773"){
                
              window.location.href= "../screens/registrar-producto.html"
            }else{
              alert("Las credenciales son invalidas, intenta nuevamente");
            }
              });
            })
            .catch((error) => console.log( error));
           
          };  


const formulario = document.querySelector("[data-formlogin]");
formulario.addEventListener("submit", async (evento)=>{
    evento.preventDefault();
    const email =document.querySelector("[data-email]").value;
    console.log(email)
    const password = document.querySelector("[data-password]").value;
    console.log(password)
    const validarUser = await validarCredencialUser(email,password);
    console.log(validarUser)
});