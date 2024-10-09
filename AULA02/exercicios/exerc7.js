let altura = Number(prompt(`Me informe sua altura:`));
let peso = Number(prompt(`Me informe seu peso:`));

let imc = peso / (altura * altura)

alert(`Seu IMC é: ${imc.toFixed(2)}`)