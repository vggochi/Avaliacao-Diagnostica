let resultado = 10 + 5 * 2 > 20 && !false;

console.log(`${resultado}`)

// O valor da variável resultado será false.

// Justificativa:
// Precedência de operadores: O operador de multiplicação (*) tem prioridade sobre a adição (+), então 5 * 2 é calculado primeiro, resultando em 10. Em seguida, 10 + 10 resulta em 20.

// Comparação: 20 > 20 é false (20 não é maior que 20).

// Negação: !false é true.

// Operador lógico AND: false && true resulta em false, pois o AND requer que ambas as partes sejam verdadeiras.

