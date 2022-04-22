/*variables*/
let edad = 10; // number type, global variable
console.log(edad); //no es una alert
//puedo cambiar valor de edad
edad = 20;
console.log(edad); //no es una alert

//definir variable numerica que no pueda ser modificarla
const altura = 174.5;
console.log(altura);

//otra forma, original de js, pero que no se suele usar
var nombre = 'ezequiel'; //define variable global

//tipo string
let apellido = 'morales';

//typoof muestra el tipo de dato la variable asignada

console.log(nombre, apellido, typeof nombre, typeof apellido);
console.log(edad, typeof edad);

const flag = true;
const iguales = false;
console.log(flag, typeof flag, iguales, typeof iguales);

//array de string
const materias=['lengua', 'ingles', 'etc'];

//valor = nombreVariable[pos]
let materia = materias[0];
console.error(materia);

console.info(materias[1]);

//Creación de un objeto, en este caso: persona
let persona = {
    edad: 54,
    argentino: true,
    nombre: 'ezequiel',
    apellido: 'morales',
    idiomas: ['español', 'inglés', 'italiano']
};

console.log(persona, typeof persona);

//undifined
let perro = undefined;
perro.apodo = 100; //no se puede asignar un valor a una variable undefined

perro = {
    apodo: 'firulais',
}

perro = {
    apodo: 'perriro',
    edad: 100,
}
console.log(perro, typeof perro);

let gato = null;
gato.edad = 100; //da error, a type null no se le puede asigna valores
gato = {edad: 100};
console.log(gato, typeof gato);

/* Los tipos de datos tienen funciones o metodos */

let nacimiento = argentina;
