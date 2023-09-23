// Arreglos
const arreglo = ['Texto', 456.10, false]; // Asi se declara un array
console.log(arreglo); // Mostramos el arreglo

const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[0]); // Mostramos el arreglo en la posicion 0

const colores = []; // Arreglo vacio
colores[0] = 'Rojo';
colores[1] = 'Verde';
console.log(colores);

/**
 * Los arreglos en javascript son objetos
 */

console.log('La cantidad de elementos del array colores es: ' + colores.length); // .lenght te devuelve la cantidad de elementos de un array

// Agregamos un elemento al final en javascript usando la funcion push
colores.push('Azul');
console.log(colores);