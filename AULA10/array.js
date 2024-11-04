let nome = ['Aluno01', 'Aluno02', 'Aluno03', 'Aluno04', 'Aluno05']
console.log(nome.length);
console.log(nome[0]);
console.log(nome[1]);
console.log(nome[2]);
console.log(nome[3]);
console.log(nome[4]);

// pop() - remove o último elemento do array
// push() - insere um valor no último elemento
// shift() - remove o primeiro elemento do array
// unShift() - insere um valor no primeiro elemento
// join()
// toString()

console.log('---------POP----------');

let valor1 = nome.pop()
console.log(nome);
console.log(valor1);

console.log('-------EXERCICIO PUSH------------');

let frutas = ['Morango', 'Manga', 'Maça']
frutas.push('Lixia')

console.log(frutas);

console.log('-------SHIFT e UNSHIFT------------');

let nomeRemovido = nome.shift()
console.log(nome);
console.log(nomeRemovido);
nome.unshift('Inseriu eu')
console.log(nome);

console.log('-------EXERCICIO UNSHIFT------------');
frutas.shift()
frutas.unshift('Carambola-adicionada')
console.log(frutas);