//los arrays son dinamicos en javascript, es decir en los tipos de datos

let lista =[{nombre:"armando",edad:24,dispositivos:["samsung","alcatel","iphone"]}, true,false];
console.log(typeof(lista));
lista.push(2);
lista.push(4);
console.log(lista.length);
console.log(lista);

console.log(lista.toString());


console.log("primer foreach");

lista.forEach(element => {
    console.log(element);
});
console.log("segundo foreach");



lista.forEach(element => {
    console.log(typeof(element));
        if (typeof(element).toString == "object") {
       // console.log(element);
            element.forEach(subElement =>{
                console.log(subElement);
            });
    }
    });