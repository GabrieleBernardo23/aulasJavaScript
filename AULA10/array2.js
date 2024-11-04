let notas = [4, 8, 10, 7, 8]

// join = faz uma separação do array por um elementos predefinido
// toString - transforma o array em uma string

console.log(notas.toString());

console.log(notas.join(' * '));

console.log('-------modo certo de fazer-------');

let join = notas.join(' - ')
console.log(join);

console.log('---- deleta um elemento do array, mas o array ainda esta la ----');
delete notas[3]
console.log(notas);