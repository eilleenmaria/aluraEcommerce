import {productService} from "../service/product-service.js"; 
import {encodeFileAsBase64URL, base64String} from "../js/file-reader.js"
const archivo= document.getElementById("image"); 
const image =  document.getElementById("url")
const error = document.getElementById("error")
  
archivo.addEventListener('input', async (event) => {
    // Convierto la primera imagen del input en una ruta Base64
    const base64URL = await encodeFileAsBase64URL(archivo.files[0]);      
    image.innerHTML=base64URL.substring(0,base64URL.indexOf(","));  
    console.log("hi")      
}); 

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const url = base64String;    
    const categoria = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    productService.crearProduct(url,categoria,name,price,description).then(() => {
        window.location.href = "../screens/registro_exitoso.html";
      })
      .catch((err) =>alert(err) );
     
})


