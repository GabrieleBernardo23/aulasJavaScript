let notaPedido = 5

if (notaPedido >= 1 && notaPedido <= 5) {
    if (notaPedido == 5) {
        console.log('PEDIDIFO EXCELENTE. MUNDO BOM.');
    }
    if (notaPedido == 4) {
        console.log('Parabens.');
    }
    if (notaPedido == 3) {
        console.log('Entregue nos conformes.');
    }
    if (notaPedido == 2) {
        console.log('Comestivel.');
    }
    if (notaPedido == 1) {
        console.log('Horrivel.');
    }
}
else{
    console.log('Nota invalida, responda de 1 a 5');
}