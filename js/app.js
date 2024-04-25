let pantalla = document.getElementById('pantalla');

function botons(value) {
  pantalla.innerText += value;
}

function calcular() {
  try {
    pantalla.innerText = eval(pantalla.innerText);
  } catch (error) {
    pantalla.innerText = 'Error';
  }
}

function limpiar() {
  pantalla.innerText = '';
}

function sqrt() {
  pantalla.innerText = Math.sqrt(parseFloat(pantalla.innerText));
}

function sin() {
  pantalla.innerText = Math.sin(parseFloat(pantalla.innerText));
}

function cos() {
  pantalla.innerText = Math.cos(parseFloat(pantalla.innerText));
}

function tan() {
  pantalla.innerText = Math.tan(parseFloat(pantalla.innerText));
}