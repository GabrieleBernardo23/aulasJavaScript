let email = ['email01@gmail.com', 'email02@gmail.com', 'email03@gmail.com', 'email04@gmail.com']

// for(let i = 0; i < email.length; i++){
//     console.log(`Email enviado para: ${email[i]}`);
// }

//array.forEach ((elemento do array, index, array completo)=>{})
email.forEach((email, cadastro, arrayCompleto)=>{
console.log(`Email enviado para: ${email}`);
console.log(`ID do email: ${cadastro}`);
console.log(`Lista: ${arrayCompleto}`);
console.log('----------------------------');
})

// Elemento do array
// Index (Local do valor[0]) // Percorre a array semprecisar colocar a posição
// Array completo

//------------EXERCICIO-------------------

console.log('------------------------');

let carros = ['Celta', 'Gol', 'Prisma', 'Chevette']

carros.forEach((carros, index, completo)=>{
    console.log(`Marca do carro: ${carros}`);
    console.log(`Id do carro: ${index}`);
    console.log(`Lista de carros: ${completo}`);
    console.log('--------------------');
})