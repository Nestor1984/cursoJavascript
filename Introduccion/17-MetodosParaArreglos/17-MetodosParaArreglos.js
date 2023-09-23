
// Arreglo
const colores = ['Rojo', 'Verde', 'Azul'];

/* 
	 1 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/

console.log(colores.length); // colores.lenght: devuelve la cantidad de elementos que hay en el array

/*
	2  .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/

// document.body.innerHTML = colores.toString();

/*
	3  .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/

console.log(colores.join('-')); // colores.join('caracterPorElCualQueremosSeparar')


/*
	4 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/

const letras = ['c', 'b', 'd', 'a'];
console.log(letras.sort()); // letras.sort(): devuelve el array ordenado en orden alfabetico (ascendente)

const numeros = [3, 2, 4, 1];
console.log(numeros.sort()); // numeros.sort(): devuelve el array ordenado en orden numerico (ascendente)

/*
	5 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/
console.log(letras.reverse()); // letras.reverse(): devuelve el array ordenado en orden alfabetico (descendente)
console.log(numeros.reverse()); // numeros.reverse(): devuelve el array ordenado en orden numerico (descendente)

/*
	6 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/
const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2); 

console.log(arreglo3); 

/* 
	7 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/
colores.push('Amarillo');
console.log(colores);

/*
    8 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/
colores.pop(); // colores.pop(): borramos el ultimo elemento del array
console.log(colores);

/* 
	9 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
// const diaEliminado = dias.shift();
// console.log(diaEliminado);
console.log(dias[0]);

/*
	10 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift('Carlos');
console.log(dias);

/* 
	11 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice(0, 0, 'Rafael', 'Roberto');
console.log(amigos);

/* 12 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);
