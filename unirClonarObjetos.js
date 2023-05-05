const user1 ={
    "nombre":"Armando",
    edad: 12,
    activo:true
};
const user2 ={
    "nombre":"Fabiola",
    edad: 21,
    activo:false
};


const users ={...user1,...user2};

// se sobreescribe
console.log(users);


const usersDos ={user1:{...user1},user2:{...user2}};
console.log(usersDos)


//La manera correcta es usando un array
const usersArray= new Array(user1,user2);
console.log(usersArray)

const userArrayD= [user1,user2];
console.log(userArrayD);

const userArrayT= [user1];
console.log(userArrayT);
userArrayT.push(user2);

console.log(userArrayT);