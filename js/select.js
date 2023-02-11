const sb = document.getElementById("registrar");
sb.addEventListener("change",function(){
    const selectedValues = [].filter
    .call(sb.options, option => option.selected)
    .map(option => option.text);
    console.log(selectedValues)
    if(selectedValues == "Usuario"){        
        window.location.href = "registro-users.html";       
    }if(selectedValues == "Producto"){
        window.location.href = "registrar-producto.html"
    }
    } )
    
