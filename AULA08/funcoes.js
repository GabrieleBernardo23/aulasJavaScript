// ENTRADA - DADOS | SAÍDA - DADOS
// NÃO TEM ENTRADA - DADOS | SAÍDA - DADOS
// NÃO TEM ENTRADA - DADOS | NÃO TEM SAÍDA - DADOS
// ENTRADA - DADOS | NÃO TEM SAÍDA - DADOS

// média do aluno = nota1 e nota2

function calcularMedia(nota1 = 0, nota2 = 0) {  // () - parâmetro || já programar as notas como 0
    let media = (nota1 + nota2)/2
    return media 
    // console.log(`Sua média é ${media}`);
}

// calcularMedia(9,8)  // invocando a função
console.log(`A média do aluno é: ${calcularMedia(6,9)}`)



// funçoes que não retornam nenhum valor, mostra void