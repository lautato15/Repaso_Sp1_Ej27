function validarSudoku(sudoku) {
  // Con esta primera parte podemos ingresar tanto una matriz de 3x3 como una de 9x9 y funcionara de igual manera;
  let cols = [];
  let valorDeControl = 0;
  for (h = 0; h < sudoku.length; h++) {
    valorDeControl += h + 1;
    cols.push(0);
  }

  for (i = 0; i < sudoku.length; i++) {
    let fila = 0;
    for (j = 0; j < sudoku.length; j++) {
      fila += sudoku[i][j];
      cols[j] += sudoku[i][j];
    }
    if (fila !== valorDeControl) return false;
  }
  for (k = 0; k < cols.length; k++) {
    if (cols[k] !== valorDeControl) return false;
  }
  return true;
}
// Tres matrices correctas
const matriz1 = [
  [1, 2, 3],
  [2, 3, 1],
  [3, 1, 2],
];
const matriz2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];
const matriz3 = [
  [5, 3, 9, 8, 7, 6, 4, 1, 2],
  [7, 2, 8, 3, 1, 4, 9, 6, 5],
  [6, 4, 1, 2, 9, 5, 7, 3, 8],
  [4, 6, 2, 5, 3, 9, 8, 7, 1],
  [3, 8, 5, 7, 2, 1, 6, 4, 9],
  [1, 9, 7, 4, 6, 8, 2, 5, 3],
  [2, 5, 6, 1, 8, 7, 3, 9, 4],
  [9, 1, 3, 6, 4, 2, 5, 8, 7],
  [8, 7, 4, 9, 5, 3, 1, 2, 6],
];

// Ejercicio 27 (Extra)
// Crear una función en JavaScript llamada validarSudoku que reciba como
// parámetro una matriz 9x9 conteniendo dígitos entre 1 y 9. La función debe retornar
// true o false, dependiendo de si la matriz corresponde a un tablero resuelto de
// Sudoku válido o no.
// Si nunca jugaron al Sudoku, ingresar aquí para leer las reglas del juego.
// En programación, una matriz se suele representar como un array de arrays. Por lo
// tanto, para crear una matriz 9x9 se necesita un array de 9 elementos, donde cada
// uno de esos elementos es a su vez un array de 9 elementos.
// Ejemplo de una matriz 9x9:
// var matriz = [
// [5, 3, 4, 6, 7, 8, 9, 1, 2],
// [6, 7, 2, 1, 9, 5, 3, 4, 8],
// [1, 9, 8, 3, 4, 2, 5, 6, 7],
// [8, 5, 9, 7, 6, 1, 4, 2, 3],
// [4, 2, 6, 8, 5, 3, 7, 9, 1],
// [7, 1, 3, 9, 2, 4, 8, 5, 6],
// [9, 6, 1, 5, 3, 7, 2, 8, 4],
// [2, 8, 7, 4, 1, 9, 6, 3, 5],
// [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ];
// Para acceder a un elemento de la matriz podemos escribir:
// matriz[4][3] que en este ejemplo corresponde a 8.

// Si a la función validarSudoku le pasamos la matriz anterior, debería retornar
// true, ya que la misma corresponde con una solución de Sudoku válida.
// validarSudoku([
// [5, 3, 4, 6, 7, 8, 9, 1, 2],
// [6, 7, 2, 1, 9, 5, 3, 4, 8],
// [1, 9, 8, 3, 4, 2, 5, 6, 7],
// [8, 5, 9, 7, 6, 1, 4, 2, 3],
// [4, 2, 6, 8, 5, 3, 7, 9, 1],
// [7, 1, 3, 9, 2, 4, 8, 5, 6],
// [9, 6, 1, 5, 3, 7, 2, 8, 4],
// [2, 8, 7, 4, 1, 9, 6, 3, 5],
// [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // Debería retornar true.
