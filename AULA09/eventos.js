// const calcularMedia = (n1 = 0, n2 = 0) => {
//     let media = (n1 + n2)/2
//     return media
// }
// console.log(`A média do aluno é: ${calcularMedia(5, 10)}`);

let primeiraDiv = document.querySelector('div');
// primeiraDiv.style.backgroundColor = 'green';

const mudarCor = () => {
    primeiraDiv.style.backgroundColor = 'cornflowerblue'
}

const mudarCor2 = () => {
    primeiraDiv.style.backgroundColor = 'hotpink'
    primeiraDiv.innerHTML = 'Gabriele'
}
