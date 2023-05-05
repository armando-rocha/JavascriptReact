function imprime(){
    console.log("Imprimez")    
}



for (let index = 0; index < 100; index++) {
    imprime();
    
}

//Funcion con parametros

function saludoConNombre(nombre){
console.log("hola "+nombre)
};

saludoConNombre("Armando");

function suma(a,b=0){
    console.log(a+b);
}
suma(4,2);

suma(4);



//Retornar informacion

function retornaResultado(a,b){
    return a+b;
}
let res = retornaResultado(10,2);
console.log(res);


//retornar una lista

function retornaLista(val){
return[val," valor agregado"];
}

console.log(retornaLista(1));

const[v1,v2] = retornaLista(1);

console.log(v1);



//retornar un objeto (json)

function retornaObjeto(nombre,edad){
    return{"Nombre":nombre,"Edad":edad};
    }
    console.log(retornaObjeto("Armand",28));    

    const{Nombre,Edad} = retornaObjeto("Edgar",34);
    console.log(Nombre);
    