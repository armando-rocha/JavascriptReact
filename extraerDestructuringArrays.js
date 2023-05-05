//El destructuring se realiza por posicion de la lista, separandolos por comas


let lista =["Mexico","USA","JAPON","FRANCIA"];

console.table(lista);

const [,,pais3,] = lista;

console.log(pais3);