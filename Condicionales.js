const edad = 18;

if(18<=edad){
    console.log("Mayor de edad");
}else if(18 === edad){
    console.log("18 años");
}else{    
    console.log("Menor de edad");
}

console.log("Ternario")

const ternario = edad>18 ? "mayor edad":"menor edad";
console.log(ternario)