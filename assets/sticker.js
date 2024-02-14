function verificarStickers(){ 
    let sUno = parseInt(document.querySelector('#sticker1').value) || 0;
    let sDos= parseInt(document.querySelector('#sticker2').value) || 0;
    let sTres = parseInt(document.querySelector('#sticker3').value) || 0;
    let resultadoParrafo = document.querySelector('.parrafo');


    let cantidad = sUno + sDos + sTres;

    if (cantidad <= 10){
        resultadoParrafo.innerHTML = 'Llevas ' + cantidad + ' stickers'
    } else {
        resultadoParrafo.innerHTML = 'Llevas demasiados stickers'
    }
}