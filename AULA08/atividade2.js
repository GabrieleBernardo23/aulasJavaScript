function conversao () {
    let real = Number(prompt(`Digite o valor:`))
    let euro = real / 6.16
alert(`Seu valor é R$${real}, e equivale: €${euro.toFixed(2)}`)
}
conversao()