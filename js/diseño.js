function openwindow(){

    var ventana1 = document.getElementById('ventana1');
    var boton = document.getElementById('boton');

    ventana1.classList.add("verventana");
}

boton.addEventListener('click', openwindow); 

function closewindow(){

    var cerrar1 = document.getElementById('cerrar1');
    var ventana1 = document.getElementById('ventana1');
    ventana1.classList.add("cerrarventana");
}

cerrar1.addEventListener('click',closewindow);