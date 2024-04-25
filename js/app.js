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
function convertidor(sistema) {
  let valor = parseFloat(pantalla.innerText);
  switch (sistema) {
      case 'BIN':
          pantalla.innerText = valor.toString(2);
          break;
      case 'OCT':
          pantalla.innerText = valor.toString(8);
          break;
      case 'HEX':
          if (!isNaN(valor)) {
              pantalla.innerText = decimalToHex(valor);
          } else {
              pantalla.innerText = 'Error';
          }
          break;
      case 'DEC':
          pantalla.innerText = valor.toString(10);
          break;
      default:
          break;
  }
}

function decimalToHex(decimal) {
  return decimal.toString(16).toUpperCase();
}
