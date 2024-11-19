const calcularIMC = () => {
    let altura = Number(document.querySelector('#altura').value)
    let peso = Number(document.querySelector('#peso').value)
    let paragrafo = document.querySelector('p')
    let imc = peso / (altura * altura)
    paragrafo.innerHTML = `Seu IMC é ${imc.toFixed(2)}`
}