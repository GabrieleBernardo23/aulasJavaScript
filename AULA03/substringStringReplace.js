let elemento1, elemento2
let time = 'São Paulo'

elemento1 = time.substring(3) // substring

console.log(time);
console.log(elemento1);

console.log('---------------');

elemento2 = time.split('a')// split
// para separar um elemento em dois por determinada letra é só colocar essa letra no parenteses .split('a') 

console.log(time);
console.log(elemento2);
// para procurar a palabra coloca o .split(' ') com o espaço
// para procurar o caracter coloca o .split('') sem o espaço


console.log('---------------');

// REPLACE - mudar uma frase para outra

let frase = 'Olá aluno do PROA'

let alunoIOS = frase.replace("PROA", 'IOS')

console.log(frase);
console.log(alunoIOS);