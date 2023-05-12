//variableGlobal
let dia = 24;

console.log(dia);
function prueba(){
    dia =20;
    //console.log(dia);
}

function pruebaVariableLocal(){
    let dia =8;
    console.log(dia);
}
prueba();
console.log(dia);
pruebaVariableLocal();