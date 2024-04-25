let screen = document.getElementById('screen');

function addToScreen(value) {
  screen.innerText += value;
}

function calculate() {
  try {
    screen.innerText = eval(screen.innerText);
  } catch (error) {
    screen.innerText = 'Error';
  }
}

function clearScreen() {
  screen.innerText = '';
}

function sqrt() {
  screen.innerText = Math.sqrt(parseFloat(screen.innerText));
}

function sin() {
  screen.innerText = Math.sin(parseFloat(screen.innerText));
}

function cos() {
  screen.innerText = Math.cos(parseFloat(screen.innerText));
}

function tan() {
  screen.innerText = Math.tan(parseFloat(screen.innerText));
}
