function verificarPassword(){selectUno = document.querySelector('.select1').value;
    selectDos = document.querySelector('.select2').value;
    selectTres = document.querySelector('.select3').value;
    resultado = document.querySelector('#p');

    if(selectUno == 9 && selectDos == 1 && selectTres == 1){
        resultado.innerHTML = 'Password 1 Correcto'
    } else if (selectUno == 7 && selectDos == 1 && selectTres == 4){
        resultado.innerHTML = 'Password 2 Correcto'
    } else if (selectUno == 9 && selectDos == 2 && selectTres == 2){
        resultado.innerHTML = 'Password 3 Correcto'
    } else{
        resultado.innerHTML = 'Password Incorrecto'
    } 
}