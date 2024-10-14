let saldo = 1000
let ensolarado = false

//se o saldo for maior que 1500 *E* ensolarado
if(saldo >= 1500 && ensolarado == true){
    console.log('Vamos para a praia');
}

//se o saldo for maior que 1500 *OU* ensolarado
else if(saldo >= 1500 || ensolarado == true){
    console.log('Ah, fazer o que, vamos lá');
}

//o JavaScript pega só o primeiro que ele achar, de cima para baixo
// else if(saldo >= 1500){
//     console.log('Ta sol mesmo, vamos lá');
// }