const listaProduct = ()=>
    fetch("https://apiweb-y4tv.onrender.com/producto").then((respuesta) => respuesta.json());

const crearProduct = (url,categoria,name,price,description) => {
    return fetch("https://apiweb-y4tv.onrender.com/producto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url,categoria,name,price,description, id: uuid.v4() }),
    });
  };
  const eliminarProduct = (id) => {
    return fetch(`https://apiweb-y4tv.onrender.com/producto/${id}`, {
      method: "DELETE",
    });
  };
  
  const detalleProduct = (id) => {
    return fetch(`https://apiweb-y4tv.onrender.com/producto/${id}`).then((respuesta) =>
      respuesta.json()
    );
  };
  const actualizarProduct = (url,categoria,name,price,description, id) => {
    return fetch(`https://apiweb-y4tv.onrender.com/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url,categoria,name,price, description}),
    })
      .then((respuesta) => respuesta)
      .catch((err) => console.log(err));
  };
 

  export const productService={
    listaProduct,
    crearProduct,
    eliminarProduct,
    detalleProduct,
    actualizarProduct 
  
  }