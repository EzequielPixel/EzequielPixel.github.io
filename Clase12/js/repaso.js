let alumnos = ['alan','alejandro','daiana','daniel'];

let longitud = alumnos.length

console.log(longitud);

let i=0;

while(alumnos[i]!='daiana'){
    console.log(i,alumnos[i],typeof[alumnos]);
    i++;
}

let h=0;

while(h<longitud){
    if(alumnos[h]!='daiana'){
        console.log(alumnos[h]);   
    }
    h++;
}

//busqueda en un arreglo de objetos

let alumnosObj=[
    {
        edad: 23,
        nombre: 'martin'
    },
    {
        edad: 48,
        nombre: 'juan'
    },
    {
        edad: 5,
        nombre: 'isabela'
    }
];

let menor = alumnosObj[0];

for(let elMenorObj of alumnosObj){
    if(elMenorObj.edad < menor.edad){
        menor = elMenorObj;
    }
}
console.log(menor);


let long = alumnosObj.length;
let elMenor = alumnosObj[0];
let puntero =[];

for(let j=0; j<long; j++){
    if(alumnosObj[j].edad < elMenor.edad){
        elMenor = alumnosObj[j];
        puntero.push(j);
    }
}
console.log('El menos es:', elMenor);
console.log('la posición es:', puntero);

otroMenor = alumnosObj[0]

let menorEdad = alumnosObj.filter(alumnosObj => (alumnosObj.edad < otroMenor.edad))
console.log(menorEdad)
