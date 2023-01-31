const validateAmountCard=(idElementParent,idElementChild)=>{
    let containProductos= document.getElementById(idElementParent);
    let cards = document.getElementById(idElementChild);
    let containProductosStyle =  window.getComputedStyle(containProductos);
    let valueGap = parseInt(containProductosStyle.getPropertyValue('row-gap'));
    let countWidth=parseInt(containProductos.offsetWidth / cards.offsetWidth  );
    let countHeight=Math.round(containProductos.offsetHeight / (cards.offsetHeight +  valueGap) );
    let cantcard = countWidth * countHeight;   
    return cantcard;
}
const validateAmountItem=(variable,idElementChild)=>{
    let containProductos= variable;
    let cards = document.getElementById(idElementChild);
    let containProductosStyle =  window.getComputedStyle(containProductos);
    let valueGap = parseInt(containProductosStyle.getPropertyValue('row-gap'));
    let countWidth=parseInt(containProductos.offsetWidth / cards.offsetWidth  );
    let countHeight=Math.round(containProductos.offsetHeight / (cards.offsetHeight +  valueGap) );
    let cantcard = countWidth * countHeight;       
    return cantcard;
}



export{
    validateAmountCard,
    validateAmountItem
}
