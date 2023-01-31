import {productService} from "../service/product-service.js"; 
import { validateAmountItem } from "../js/amountCards.js";

let div= document.getElementById('contain-productos');

productService
    .listaProduct().then((data) => {
        let listCategoria=[];
        data.forEach(({categoria})=>{ listCategoria.push(categoria)
            
        })
        const newListCategoria= new Set(listCategoria);
        
        
        let num=1;
        newListCategoria.forEach((item) => {        
            div.innerHTML+= 
            `<div  id="linea" class="linea-productos"> 
            <div id="encabezado" class="productos-encabezado"> 
                    <h2 id="titulo">${item}</h2>
                    <button class="encabezado-button" id='viewAll' >Ver todo <img src="./assets/img/arrow_back_black_24dp 1.png" alt="flecha derecha" ></button>
            </div>
            <div id="galeria${num}" class="productos-contain">
            </div>
        </div>  `
        let viewAll=document.getElementById("viewAll")
        viewAll.addEventListener("click",()=>{   
            window.location.href ="screens/todo-productos.html" ;            
        })
       
   
        let  galeria = document.getElementById(`galeria${num}`);
        num +=1;   
            data.forEach(({name, url,price, categoria,description,id})=>{
                
                if( item === categoria){                      
                    galeria.innerHTML += `<div class="productos-item" id= "productoItem">
                    <div class="productos-item_img"><img src="${url}" alt="">
                    </div>                    
                    <h3 class="productos-item_name">${name}</h3>
                    <p class="productos-item_price">${price}</p>
                    <a class="productos-item_view" href="screens/descripcionProducto.html?id=${id}">Ver producto</a>                    
                    </div>` ;                               
                }                          
            });
            console.log(galeria)
            
            const amountCard= validateAmountItem(galeria,"productoItem")
            
            if(galeria.childElementCount < amountCard ){
                galeria.classList.add('justify')
            }     
         
           

        });
    }).catch((error) => alert("Ocurrió un error"));

    