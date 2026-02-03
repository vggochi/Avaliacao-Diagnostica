let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);

//x++ usa 5, depois x vira 6.
//--y transforma 10 em 9.
// Multiplica: 5 * 9 = 45
// Divide por 2: 45 / 2 = 22.5
// Soma o módulo: 22.5 + (9 % 3 = 0) → 22.5