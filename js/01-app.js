//Probar 2 valores.

function suma(a, b) {
  return a + b;
};

function restar(a, b) {
  return a - b;
}

let resultado = suma(1, 2);
let esperado = 2;

if (resultado !== esperado) {
  console.error(`La prueba no paso.`);
} else {
  console.log(`La prueba se supero.`);
};

resultado = restar(10,5);
esperado = 5;

if (resultado !== esperado) {
  console.error(`La prueba no paso.`);
} else {
  console.log(`La prueba se supero.`);
};