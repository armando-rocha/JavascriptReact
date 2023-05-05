//PARA EXTRAER 2 ATRIBUTOS DE 2 OBJETOS que llevan el mismo nombre de el atributo se le agrega un alias al campo en el momento de extraccion
const persona={
    nombre:"armand",
    edad:28,
    activo:true
}

const personaDos={
    nombre:"Pedro",
    edad:28,
    activo:true
}



const{nombre,edad,activo} = persona;


const{nombre:nombre2,edad:edadP2,activo:activoP2} = personaDos;

console.log(nombre);


console.log(nombre2);
