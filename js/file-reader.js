var base64String = "";
async function encodeFileAsBase64URL(file) {
      return new Promise((resolve) => {
        var allowedExtensions =
                    /(\.jpg|\.jpeg|\.png|\.gif)$/i;
             
            if (!allowedExtensions.exec(file.name)) {
                error.style.display="flex"
                error.style.color="red"
                error.innerHTML="El tipo de archivo no es valido, seleccione nuevamente"
                console.log(error)
                file = '';
                return false;
            }
            else{
                if(file){
                    error.style.display="none"
                    error.innerHTML=""
                    const reader = new FileReader();
                    reader.addEventListener('loadend', () => {
                        resolve(                
                          base64String = reader.result);
                    });
                    reader.readAsDataURL(file);
                    console.log("hello")
                     
                }
            }
          
      });
  };
  

export{
        encodeFileAsBase64URL,
        base64String
  
}