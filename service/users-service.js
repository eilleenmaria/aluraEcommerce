const listUsers = ()=>
fetch("https://apiweb-y4tv.onrender.com/users").then((respuesta) => respuesta.json());

const crearUsers = (user,email, password)=>{
    return fetch("https://apiweb-y4tv.onrender.com/users",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, email, password, id: uuid.v4() }),
      
    })
}

const readUser = async(id)=> { 
    try{
        const respuesta = await fetch(`https://apiweb-y4tv.onrender.com/users/${id}`);
    return await respuesta.json();
    }catch(err) {
        console.log(err);
        // window.location.href = "../screens/iniciarsesion.html"
    };
} 



export const userService= {
    listUsers,    
    crearUsers,
    readUser
}