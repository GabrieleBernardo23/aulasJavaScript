let idade = [15, 23, 71, 98]

let guarda = idade.filter((idade)=>{
    return idade > 36
})

console.log(idade);
console.log(guarda);

//------------EXERCICIO-------------------

console.log('------------------------');

let carros = ['Celta', 'Gol', 'Prisma', 'Chevette']

let filtro = carros.filter((carros)=>{
    return carros == 'Prisma'
})

console.log(carros);
console.log(filtro);