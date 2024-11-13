function alerta () {
    alert('Your cart is empty')
}

function cambiarImg (imagen) {
    imagen.src = 'img/succulents-2.jpg';
}

function regresarImg(imagenCambiada) {
    imagenCambiada.src = 'img/succulents-1.jpg';
}

function eliminarCookie() {
    var galleta = document.querySelector('.galleta');
    galleta.style.display = 'none';
}