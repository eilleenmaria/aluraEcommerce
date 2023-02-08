import {productService} from "../service/product-service.js"; 
import { validateAmountCard } from "../js/amountCards.js";

const todoProductos=(name, url,price,description,id)=>{
    const agregarProducto= document.getElementById("agregarProducto" );
    agregarProducto.addEventListener("click",()=>{   
        window.location.href ="registrar-producto.html" ;            
    })
    const view = document.createElement("div");
    view.classList.add("productos-item")
    view.setAttribute("id","productoItem")
    const card =
    `
        <div class="productos-item_img"><img src="${url}" alt="">
        </div>                    
        <h3 class="productos-item_name">${name}</h3>
        <p class="productos-item_price">${price}</p>
        <a class="productos-item_view" href="descripcionProducto.html?id=${id}">Ver producto</a>                    
    ` ;  
    view.innerHTML=card;   
    return view
}

let containProductos = document.querySelector(".todos-producto_contain");
productService
    .listaProduct()
    .then((data) =>{
        data.forEach(({ name, url,price, description, id }) => {
            const viewProductos = todoProductos(name, url,price,description,id);
            containProductos.appendChild(viewProductos);
           
          });
      
        const amountCards= validateAmountCard("todoProducto","productoItem")
        if(containProductos.childElementCount < amountCards ){
        containProductos.classList.add('justify')
    }     
    }).catch((error) => {console.log(error); window.location.href="../screens/error.html"
                        }
    
    )
    

