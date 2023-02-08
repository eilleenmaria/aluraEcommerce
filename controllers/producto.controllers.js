import {productService} from "../service/product-service.js"; 
//backticks
const crearNuevaLinea = (name, url,price, categoria,id) => {
    const linea = document.createElement("tr");
    const contenido = 
    `
      <td class="td" data-td>
        ${name}
      </td>
      <td class="td"><img class="table__img" src="${url}"></td>
      <td class="td">${price}</td>
      <td class="td">${categoria}</td>
     
      <td class="td">
        <ul class="table__button-control">
          <li>
            <a
              href="editar-producto.html?id=${id}"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
      const id = btn.id;
      productService
        .eliminarProduct(id)
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((err) => alert("Ocurrió un error"));
    });
  
    return linea;
  };
  
  const table = document.querySelector("[data-table]");
  
productService
    .listaProduct()
    .then((data) => {
      data.forEach(({ name, url,price, categoria, id }) => {
        const nuevaLinea = crearNuevaLinea(name, url,price, categoria,id);
        table.appendChild(nuevaLinea);
      });
    })
    .catch((error) => console.log( error));
  