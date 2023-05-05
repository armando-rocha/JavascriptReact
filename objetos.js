const persona={
"nombre":"Armand",
"edad":"29",
activo:false
};

console.log(persona);

console.table(persona);

console.log(persona.activo);


//destructuring ( desestructurar informacion de un objeto)
const {nombre,edad,activo} = persona;

console.log(nombre);

// destructuring en react es la forma en que extrae variable React



//Enhancement

// es pasar los datos directamente a un objeto, es decir pasar  un atributo de otro objeto o una variable sin especifarlo explicitamente
// como en el caso de "nombre"

const user = {
    "mifoto":"mifoto",
    carro:"vw",
    nombre
};

console.log(user);
console.table(user);