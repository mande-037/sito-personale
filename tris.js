const xchar = "X";
const ochar = "O";
var giocatore = xchar;
var schema = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function mossa(x, y) {
  if (schema[x][y] === '') {
    schema[x][y] = giocatore;
    let cell = document.getElementsByTagName('td')[x * 3 + y];
    cell.innerText = giocatore;
    if (haiVinto()) {
      alert(cell.innerText + ' ha vinto');
      resetGioco();
    } 
    else if (pareggio()) {
      alert('Pareggio');
      resetGioco();
    } 
    else {
      giocatore = giocatore === xchar ? ochar : xchar;
    }
  }
}

function haiVinto() {
  for (let i = 0; i < 3; i++) {
    if (
      (schema[i][0] !== '' && schema[i][0] === schema[i][1] && schema[i][0] === schema[i][2]) ||
      (schema[0][i] !== '' && schema[0][i] === schema[1][i] && schema[0][i] === schema[2][i])
    ) {
      return true;
    }
  }
  if (
    (schema[0][0] !== '' && schema[0][0] === schema[1][1] && schema[0][0] === schema[2][2]) ||
    (schema[0][2] !== '' && schema[0][2] === schema[1][1] && schema[0][2] === schema[2][0])
  ) {
    return true;
  }
  return false;
}

function pareggio() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (schema[row][col] === '') {
        return false;
      }
    }
  }
  return true;
}

function resetGioco() {
  schema = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  giocatore = xchar;
  let cells = document.getElementsByTagName('td');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}