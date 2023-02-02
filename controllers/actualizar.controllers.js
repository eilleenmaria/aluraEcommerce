import {productService} from "../service/product-service.js"; 
import {encodeFileAsBase64URL, base64String} from "../js/file-reader.js"

const formulario = document.querySelector("[data-form]");
const file= document.getElementById("image");
const image =  document.getElementById("url");
const view = document.getElementById("view");

file.addEventListener('input', async (event) => {
  // Convierto la primera imagen del input en una ruta Base64
  const base64URL = await encodeFileAsBase64URL(file.files[0]);      
  image.innerHTML=base64URL.substring(0,base64URL.indexOf(","));
  view.src=base64String 
  console.log("hi")      
}); 


const obtenerInformacion = async () => {
  const urlLocation = new URL(window.location);
  const id = urlLocation.searchParams.get("id");

  if (id === null) {
    console.log(id)
    window.location.href = "screens/error.html";
  }
  const url = document.querySelector("[data-image]")   
  const categoria = document.querySelector("[data-categoria]");
  const name = document.querySelector("[data-name]");
  const price = document.querySelector("[data-price]");
  const description = document.querySelector("[data-description]");


  try {
    const producto = await productService.detalleProduct(id);
    if (producto.url && producto.name && producto.price && producto.categoria && producto.description) {
      url.src = producto.url;
      name.value = producto.name;
      price.value = producto.price;
      categoria.value = producto.categoria;
      description.value = producto.description;
      
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error)
    window.location.href = "screens/error.html";
  }
};
console.log(price.value)
obtenerInformacion();



formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();  
  const urlLocation = new URL(window.location);
  const id = urlLocation.searchParams.get("id");   
 
  const url = document.querySelector("[data-image]").src;  
  console.log(url)
  const categoria = document.querySelector("[data-categoria]").value;
  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const description = document.querySelector("[data-description]").value;        
productService. actualizarProduct (url,categoria,name,price,description, id).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
  });
});
