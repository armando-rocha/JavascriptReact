
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



