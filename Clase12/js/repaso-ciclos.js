let vector = [];
let personas = [];

const cantidadPersonas = prompt('Cuantas personas?');

for(let i=0; i<cantidadPersonas; i++){
    const nombre=prompt(`Nombre ${(i+1)}:`);
    const apellido=prompt(`Apellido ${(i+1)}:`);

    const persona=armarPersona(nombre,apellido);
    personas.push(persona);
}

//recorrer el vector para mostrar los datos

for(const persona of personas){
    console.log(persona);
}

function armarPersona(_nombre,_apellido){
    const persona = {
        nombre: _nombre,
        apellido: _apellido
    };
    return persona;
}

