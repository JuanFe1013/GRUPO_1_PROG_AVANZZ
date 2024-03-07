var nombre = "Pepe";
let apellido = "Perez";
const numero = 12;
apellido = 'Gomez';
let numeroDos = 12.36;
let datoBoleano = true;
let pares = [2, 4, 6, 8, 10];
let jobs = ['Libros', 'Deportes', 'Cine'];
console.log(pares[2]);
let persona = {
    nombre: 'Juan',
    apellido: 'Quintero',
    edad: 24,
    jobs: ['Libros', 'Deportes', 'Dormir'],
    otrosDatos:{
        telefono: 1234,
        email: 'test@tets.com'
    }
};
console.log(persona['nombre'],persona.nombre);
console.log(persona.jobs[2], persona.otrosDatos.email);
const personas = [
    {nombres:'Persona 1', edad: 17, categoria:'a'},
    {nombres:'Persona 2', edad: 25, categoria:'b'},
    {nombres:'Persona 3', edad: 40, categoria:'c'},
    {nombres:'Persona 4', edad: 54, categoria:'a'},
    {nombres:'Persona 5', edad: 20, categoria:'b'},
    {nombres:'Persona 6', edad: 18, categoria:'c'},
    
];

console.log('For-----------------------');
for (let index = 0; index <= personas.length-1; index++){
    console.log(personas[index].nombres);
}
console.log('For---------------------');
for(let index in personas){
    console.log(personas[index].nombres);
}
console.log('For of---------------------');
for(let item of personas){
    console.log(item.nombres);
}

console.log('While-----------------');
let index = 0;
while(index < personas.length){
    console.log(personas[index].nombres);
    index++;
}

console.log('do While----------------');
index = 0;
do{
    console.log(personas[index].nombres);
    index++;
}while (index < personas.length);

console.log('foreach-------------');
personas.forEach((item, index) =>  {
    console.log(index, item.nombres);

});

