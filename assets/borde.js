function verificarBorde(){
    imagen = document.querySelector('#imagen')

    if (!imagen.style.border){
        imagen.style.border = '2px solid red'
    } else {
        imagen.style.border = '';
    }
}