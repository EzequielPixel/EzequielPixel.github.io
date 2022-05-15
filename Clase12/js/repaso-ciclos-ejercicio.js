/* Cargar persona en un array
    La carga de datos finaliza con edad = 0
    Validar que los datos sean correctos:
        nombre: no vacio && longitud < 50
        apellido: no vacio && longitud < 60
        edad: numerico && >0 && <119
    Listar personas con errores de formato
*/

let personas = [];

let edad;
let apellido;
let nombre;

edad=prompt('Edad:')
//Nan, undefined, null, 0 => false
while(parseInt(edad)>0 && parseInt(edad)<119){
    nombre = prompt('Nombre');
    apellido = prompt('Apellido');
    personas.push(
        {
            edad: edad,
            nombre: nombre,
            apellido: apellido
        }
    );
    edad = prompt('Edad');
}

const errores = [];

for(const persona of personas){
    if(!persona.apellido || persona.apellido.length > 60){
        errores.push(persona);
    }
    if(!persona.nombre || persona.nombre.length >50){
        errores.push(persona);
    }
}
//formas equivalentes de mostrar el vector de errores
errores.forEach(aux => console.log(aux));

for(const aux of errores){
    console.log(aux);
}

