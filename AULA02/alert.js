// console.log("teste");
 
// alert(`Erro`); //aparece um pop up no topo da tela

// let nome = prompt(`Qual seu nome?`)
// alert(`Olá ${nome}, tudo bem?`)
// let resp1 = prompt(``)
// alert(`Sinto muito em ouvir que ${resp1}`)  

// ----------------------------------------------------------------------------------------------------------

let nome, nota1, nota2, media;
// prompt()
// retorne qual a media do aluno

nome = prompt("Qual seu nome?")
nota1 = parseInt(prompt("Qual sua primeira nota?")) //o parsetInc transforma o string em numerico    
nota2 = Number(prompt("Qual sua segunda nota?")) //o Number transforma o string em numerico    
// nota2 = ParseFloat(prompt("Qual sua segunda nota?")) //o Number transforma o string em numerico    
media = (nota1 + nota2) / 2
alert(`${nome}, sua média é ${media}`)


// parseInt(prompt())
// ParseFloat(prompt())
// Number(prompt())