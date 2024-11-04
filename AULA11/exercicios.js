let carros = ['Celta', 'Gol', 'Prisma', 'Chevette']

carros.forEach((carros, index, completo)=>{
    console.log(`Marca do carro: ${carros}`);
    console.log(`Id do carro: ${index}`);
    console.log(`Lista de carros: ${completo}`);
    console.log('--------------------');
})