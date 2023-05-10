
const operarD = (val, val2) => {
    return val+val2;
    };
 

    console.log(operarD(0,2));

const sinParams = () =>{
    return "sin value"
};

console.log(sinParams());

const sumaDatosSinReturn = (a,b) => a+b;

console.log(sumaDatosSinReturn(7,199))

//ARROW FUNCTION con Map y Filter

const arreglo = new Array("posicion0","posicion1","posicion2",1);

//
const resultado = arreglo.map( (v) =>{
    return v;
} );
console.log(resultado);


//
const resultadoT = arreglo.map( v =>{
    
    
    if(v !=='posicion0'){
        return 'sustituyendoP1';
    }else{
        return v;
    }
} );
console.log(resultado);


//
const resultadoDos = arreglo.map( v => v);
console.log(resultadoDos);



//OTRO TIPO DE FUNCIONES

const countries = ["España","Mexico","Japon","Brasil","Francia"];

const edades = [12,32,3,44,67,87,81];

console.log(countries.includes("Mexico"));


const existe = edades.some( n => n>55);

console.log(existe);

const existeFind = edades.find(n => n >50);

console.log(existeFind); 


//validar todos los elementos de la lista
const existeEvery = edades.every(n => n !== '');
console.log(existeEvery);


const v2 = edades.reduce((acumulador,edad) => edad +acumulador);

console.log(v2);