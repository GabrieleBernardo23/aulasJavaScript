// console.log(typeof nome); // operador unário
// media >= 7  // operador binário
// media < 7 ? 'Aluno Reprovado' : 'Aluno Aprovado' // operador ternário

// ? = "se"

let nome = 'Aluno'
console.log(typeof nome);

console.log('------------------');

let media = 8
console.log(media >= 7);

console.log('------------------');

let media2 = 6
let res = media2 < 7 ? 'Reprovado' : 'Aprovado' // o primeiro é sempre a afirmção verdadeira e o segundo a falsa; parecida com a função SE do excel
// um jeito de ler = "a media2 é menor que 7?, se sim ele foi reprovado, se não ele foi aprovado"
console.log(res);