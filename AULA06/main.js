let saborCafe

// if (saborCafe == 1) {
//     console.log('Mochachinno');
// } else if (saborCafe == 2) {
//     console.log('Machiatto');
// } else if (saborCafe == 3) {
//     console.log('Café Bom Jesus');
// } else if (saborCafe == 4) {
//     console.log('Toddy');
// }

switch (saborCafe) {
    case 1:
        console.log('Mochachinno');
        break;

    case 2:
        console.log('Machiatto');
        break;

    case 'Toddy':
        console.log('Toddy');
        break;

    default:   //padrão, se o usuario não colocar nada
        console.log('Água');
        break;
}
