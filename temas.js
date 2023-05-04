//alert("Holi")
var a = 1;
console.log(a + " variable")

//anteriormente se ocupaba var
var  producto = "String ";
//AHORA SE OCUPA let
let variableSinInicializar;
let variableLet="hf31s";

console.log("variableSinInicializar + "+ variableSinInicializar);


//tipo de variables let , const

const nuevaVarConst=124;
let variableDos;
let variableletDos="hf31s";

console.log("variableletDos + "+ variableletDos);

console.log("variableSinInicializar + "+ variableSinInicializar);

variableletDos="mutada";

console.log("variableletDos Mutada + "+ variableletDos);

//La variable es mutable


/*
CONSTANTES
*/ 
//La constante es como en matematicas siempre tiene un valor y es unico y no se puede modificar, se debe definir la variable.
const constante = 100;
console.log(constante);



/*
Tipos de datos
*/

//undefined
let estudiante;
console.log(estudiante);
console.log(typeof(estudiante));

//boolean
let siNo=true;
console.log(siNo);
console.log(typeof(siNo));

//numero
let numero=-100;
console.log(numero);
console.log(typeof(numero));

//numeroDecimal
let numeroDecimal=100.91;
let numeroConDecimal=numeroDecimal.toFixed(2);

console.log(numeroConDecimal);
console.log(typeof(numeroConDecimal));


