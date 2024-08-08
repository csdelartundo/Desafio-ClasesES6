import Clientes from './clientes.js';
import Impuestos from './impuestos.js';

const impuesto1 = new Impuestos(150000000,5500000);
const cliente1 = new Clientes('Pedro Pascal', impuesto1);

//CALCULO IMPUESTOS
console.log(`El Monto Anual de ${cliente1.nombre} es: $${cliente1.darMontoAnualBruto()}`);
console.log(`Las Deducciones de ${cliente1.nombre} es: $${cliente1.darDeducciones()}`);
console.log(`El Impuesto Anual de ${cliente1.nombre} es: $${cliente1.calcularImpuesto()}`);
