// document.getElementById
let elemento01 = window.document.getElementById('tituloPrincipal');

elemento01.style.color = 'red';   //basicamente um css
elemento01.innerHTML = 'Gabriele';  //muda o texto do html

//_________________________________________________________________________________________________________________

    let elemento02 = window.document.getElementsByClassName('elementoParagrafo')
    for(let contador = 0; contador < elemento02.length; contador++) {
        elemento02[contador].style.backgroundColor = "cadetblue"
    }