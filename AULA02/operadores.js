// OPERADORES

/**
== Valores iguais
=== Valores e tipos iguais ( )
!= Diferente
< Menor que
<= Menor ou igual
> Maior que
>= Maior ou igual
 */

// -----------------------------------------------------

// ------------TESTE 1------------

// let valor1 = 5;
// let valor2 = 10;

// // let res = valor1 > valor2 | False
// // let res = valor1 >= valor2 | False
// // let res = valor1 < valor2 | True
// // let res = valor1 <= valor2 | True

// console.log("------------");

// // let res = valor1 == valor2
// // let res = valor1 === valor2

// console.log(res);

// _________________________________________________________________________

// ----------TESTE 2-------------

let dinheiro = 200;
let folga = true;
// >= R$ 500 

// let fds = dinheiro >= 500 && folga == true
let fds = dinheiro >= 500 || folga == true

// && = e
// || = ou
// ! = inverte a resposta, o que era 'verdadeiro' vira 'falso'

console.log(`Iremos a praia esse fds: ${fds}`);