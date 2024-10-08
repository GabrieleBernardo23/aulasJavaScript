/**
 * 'use strict'

let nota1, nota2, media
nota1 = 5
nota2 = 6
media = (nota1 + nota2) / 2

console.log(media);
 */

// //-------------------------------------------------------------------------------------------------------------------------

/** 
 * let valor1 = "A";
let valor2 = 'B';
let troca;

console.log(`Valor1 = ${valor1} \nValor2 = ${valor2}`);
//trocar valores das variaveis

troca = valor1 //o troca serve para armazenar o valor1, já que se o A pegar o B ele vira B, então não tem como o B pegar o A
valor1 = valor2
valor2 = troca

console.log(`Valor1 = ${valor1} \nValor2 = ${valor2}`);
*/


//-------------------------------------------------------------------------------------------------------------------------

// let nome = "Bran"
// let nota1 = 10
// let nota2 = 5
// let media;
// let curso = "Web"
// let aprovado = true

// let peso1, peso2
// peso1 = 0.6 
// peso2 = 0.4

// let teste = peso1 * nota1
// console.log(teste);
// let teste2 = peso2 * nota2
// // media = (nota1 + nota2) / 2
// console.log(teste2);
// media = (teste + teste2) / (peso1 + peso2)

// console.log(media);

// console.log(`O aluno ${nome} no curso ${curso} teve a primeira nota como ${nota1} e a segunda como ${nota2}, no total a média dele foi ${media} e ele foi ${aprovado}`);


//-------------------------------------------------------------------------------------------------------------------------

let nome, nota1, nota2, media, mediaFinal;
mediaFinal = true
let peso1 = 0.6
let peso2 = 0.4
nome = "Bran"
nota1 = 10
nota2 = 5

// media = (nota1 * peso1 + nota2 * peso2)  // ou
media = ((nota1 * 60) + (nota2 * 40)) / 100

console.log(`O aluno ${nome} está aprovado ${media}`);