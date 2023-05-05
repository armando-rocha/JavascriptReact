//Objetos

const persona={
    nombre:"armand",
    edad:28,
    activo:true
}


console.log(persona.activo);
console.table(persona);

persona.activo = false;
console.log(persona.activo);
console.table(persona);

persona.pais="Mexico";
console.table(persona);

delete(persona.edad);
console.table(persona);

//No permite  agregar o remover propiedades si se utliza delete retornara un false
console.log("seal   No permite  agregar o remover propiedades si se utliza delete retornara un false")
Object.seal(persona);
console.table(persona);
delete(persona.edad);
console.table(persona);



//Realiza lo mismo que SEAL pero tambien no permite modificar alguna propiedad existente (eliminar, cambiar)
Object.freeze(persona);
console.table(persona);
delete(persona.edad);
console.table(persona);
