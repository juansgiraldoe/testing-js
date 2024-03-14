//Expected.

function suma(a, b) {
  return a + b;
};

function restar(a, b) {
  return a - b;
}

let resultado = suma(1, 2);
let esperado = 2;

expected(esperado).toBe(resultado)

resultado = restar(10,5);
esperado = 5;

expected(esperado).toBe(resultado)

function expected(esperado) {
  return {
    toBe(resultado){
      if (resultado !== esperado) {
        console.error(`La prueba no paso.`);
      } else {
        console.log(`La prueba se supero.`);
      };
    },
  };
};