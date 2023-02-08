import {productService} from "../service/product-service.js"; 
const obtenerInformacion = async () => {
    const urlLocation = new URL(window.location);
    const id = urlLocation.searchParams.get("id");
  
    if (id === null) {
      console.log(id)
      window.location.href = "../screens/error.html";
    }
    const url = document.querySelector("[data-img]")    
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-price]");
    const description = document.querySelector("[data-description]");
  
  
    try {
      const producto = await productService.detalleProduct(id);
      if (producto.url && producto.name && producto.price && producto.categoria && producto.description) {
        url.src = producto.url;
        name.innerHTML = producto.name;
        price.innerHTML = producto.price;        
        description.innerHTML = producto.description;
        
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error)
      window.location.href = "../screens/error.html";
    }
  };
 
  obtenerInformacion();
  
  
  

  
