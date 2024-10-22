function calcular() {
    let altura = Number(prompt(`Informe sua altura:`));
    let peso = Number(prompt(`Informe seu peso:`));
    let imc = peso / (altura * altura);

    if (imc > 0 && imc <= 16.9) {
        alert(`Seu imc é: ${imc.toFixed(2)}, e você está muito abaixo do peso`)
    }
    else if (imc > 16.9 && imc <= 18.4) {
        alert(`Seu imc é: ${imc.toFixed(2)}, e você está abaixo do peso`)
    }
    else if (imc > 18.4 && imc <= 24.9) {
        alert(`Seu imc é: ${imc.toFixed(2)}, e você está com o peso normal`)
    }
    else if (imc > 24.9 && imc <= 29.9) {
        alert(`Seu imc é: ${imc.toFixed(2)}, e você está acima do peso`)
    }
    else if (imc > 29.9 && imc <= 34.9) {
        alert(`Seu imc é: ${imc.toFixed(2)}, e você está com obesidade grau I`)
    }
    else if (imc > 34.9 && imc <= 40) {
        alert(`Seu imc é: ${imc.toFixed(2)}, e você está com obesidade grau II`)
    }
    else if (imc > 40) {
        alert(`Seu imc é: ${imc.toFixed(2)}, e você está com obesidade grau III`)
    }
    else {
        alert(`Digite um valor válido!`)
    }
};

calcular()


/**
 *                  dois modos de fazer
 
    let altura = Number(prompt(`Informe sua altura:`));
    let peso = Number(prompt(`Informe seu peso:`));

    function calcular(peso, altura) {
    let imc = peso/(altura * altura);

    if (imc > 0 && imc <= 16.9){
        return `Seu imc é: ${imc.toFixed(2)}, e você está muito abaixo do peso`
    }
    else if (imc > 16.9 && imc <= 18.4){
        return `Seu imc é: ${imc.toFixed(2)}, e você está abaixo do peso`
    }
    else if (imc > 18.4 && imc <= 24.9){
        return `Seu imc é: ${imc.toFixed(2)}, e você está com o peso normal`
    }
    else if (imc > 24.9 && imc <= 29.9){
        return `Seu imc é: ${imc.toFixed(2)}, e você está acima do peso`
    }
    else if (imc > 29.9 && imc <= 34.9){
        return `Seu imc é: ${imc.toFixed(2)}, e você está com obesidade grau I`
    }
    else if (imc > 34.9 && imc <= 40){
        return `Seu imc é: ${imc.toFixed(2)}, e você está com obesidade grau II`
    }
    else if (imc > 40) {
        return `Seu imc é: ${imc.toFixed(2)}, e você está com obesidade grau III`)
    }
    else {
        return (`Digite um valor válido!`)
    }
};

calcular(peso, altura)

*/