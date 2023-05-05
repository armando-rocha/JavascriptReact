let nuevoArray = new Array();

nuevoArray.push("EE.UU","USA","MXN");

console.log(nuevoArray);

nuevoArray.unshift("valorInsertadoInicio");
console.log(nuevoArray);



// Creando una copia del array anterior
const copiaArray = [...nuevoArray];
console.log(copiaArray);



// Creando una copia del array anterior
const copiaArrayDos = ["elementoInicio",...nuevoArray,"elementoFinal"];
console.log(copiaArrayDos);


copiaArrayDos.pop()

console.log(copiaArrayDos);

//splice para remover elementos desde la posicion de un indice o de un indice inicia a un indice final

const copiaArrayTres =["Valor","SD", ...nuevoArray];
console.log(copiaArrayTres);

let valoresEliminados = copiaArrayTres.splice(2);

console.log(copiaArrayTres);
console.log(valoresEliminados);

const copiaArrayCuatro = [...valoresEliminados];
console.log(copiaArrayCuatro);
let valoresEliminadosDos = copiaArrayCuatro.splice(1,3);
console.log(copiaArrayCuatro);
console.log(valoresEliminadosDos);



//este devuleve una lista con aquellos que cumplen una condicion
const lista =valoresEliminadosDos.filter(function(item){
    console.log(item);
    //return item;
    //return item != 'USA' 
    return item != 'USA' && item != 'EE.UU'
})
console.log(lista)

//
const lista2 = valoresEliminadosDos.map(function(item){
    //console.log(item);
    return item != 'USA'
});
console.log(lista2);

const lista3 = valoresEliminadosDos.map(function(item){
    //console.log(item);
    if(item !== 'MXN'){
        return item;
    }
});

console.log(lista3);

/*valoresEliminadosDos.forEach(function(item){
    console.log(item);
});*/