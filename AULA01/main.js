// comentário de uma linha

/**
 * comentários
 * de
 * multiplas
 * linhas
 */

// variavel = um lugar onde guarda uma informação 

// nota = -1 // NUNCA USAR

// var nome = "texto"  // escopo global | não utilizarr, ele permite redeclarar a variavel e ter o valor alterado


// let idade = 41 // JEITO CERTO DE USAR | ele alerta quando as variaveis estão iguais e consegue diferenciar letras maiusculas e minusculas, não redeclara mas pode ser alterado

// const pi = 3.14 // é um valor absoluto, não redeclara e não pode ser alterado

// var regraPrimaria = "Nunca usar"

// let meuNome = "Gabriele";

// const idadeVotar = 16;

// let nota = "ola"

// console.log('o tipo de dado é:', typeof nota, 'e o seu valor é:', nota);  //valor numerico, testa o tipo de variavel

//----------------------------------------------------------------------------------------------------------------------------------------------------------

// apertar F8 com a extensão ativa Node.js Exec

let nome = "Gabriele"
let idade = 17;
let curso = "Dev. Web";
let matriculado = true;

console.log(idade, "Anos de Idade"); 
console.log(typeof idade);

console.log(curso);
console.log(typeof curso);

console.log(matriculado);
console.log(typeof matriculado);

console.log(`O aluno ${nome} tem ${idade +1} e está cursando ${curso}`); //interpolação
//é melhor usar o acento crase, porque permite a utilização do &{ }. Um modo mais fácil  
console.log("--------------------");
console.log("O aluno", nome, "tem", idade +1, "e está cursando", curso); //contatenação

// --------------------------------------------------------------------------------------------------------------------------------------------