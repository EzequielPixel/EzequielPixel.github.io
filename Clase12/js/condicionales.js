// IF

let estudio=true;

if(estudio){
    alert('vamos bien')
}else{
    alert('vamos mal')
}

let edad=5;

if(edad ===1){
    alert('soy bebe');
}else if(edad===2){
    alert('soy bebe de 2')
}else{
    alert('niño');
}

//Estructura de Selección

switch(edad){
    case 1: alert('soy bebe');
            break;
    case 2: alert('soy bebe 2');
            break;
    default: alert('niño');
}