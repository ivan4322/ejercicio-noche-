//Cheque
//a) Una empresa desea determinar el monto de un cheque que debe
//proporcionar a uno de sus empleados que tendrá que viajar durante un
//determinado número de días. Los gastos que cubre la empresa son: hotel,
//comida y 200 pesos diarios para otros gastos. El monto debe estar
//desglosado para cada concepto. Realiza un algoritmo que determine el
//monto del cheque.

let diasViaje = parseInt(prompt("ingrese los dias de viaje"));


let hotel = 20000;
let comida = 30000;
let otro = 200;
let todo = hotel+comida+otro;
let contMonto = 0
for (let i = 0; i<diasViaje; i++){

contMonto=contMonto+todo

}

alert("el precio total de todo los biaticos es "  +contMonto)