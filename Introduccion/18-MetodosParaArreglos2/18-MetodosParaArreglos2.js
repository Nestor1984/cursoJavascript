/*  1 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara']; 
console.log(nombres.indexOf('Rafael')); // nombres.indexOf('Rafael'): Nos devuelve el indice o la posicion en que se encuenetre el primer Rafael

/* 
	2 .lastIndexOf() 
	Obtenemos el último index de un elemento.
*/
console.log(nombres.lastIndexOf('Rafael')); // nombres.indexOf('Rafael'): Nos devuelve el indice o la posicion en que se encuenetre el ultimo Rafael

/* 	
	3 .forEach()
	Nos permite ejecutar una funcion por cada elemento
*/
 nombres.forEach((nombre, index) => {
 console.log(`Hola ${nombre} (${index})`);
 });

/* 
	4 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
 const resultado = nombres.find((nombre) => {
 	if (nombre[0] === 'E') {
 		return nombre;
 	}
 });
 console.log(resultado);

 /* 
	5 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/

// nombre.toUpperCase(): convertimos en mayusculas
 const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase()); // Como trabajamos en una sola linea podemos eliminar el return y llaves
 console.log(nombresMayusculas);

/*  6 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/
  const nombres4Letras = nombres.filter((nombre) => {
 	if (nombre.length === 4) {
 		return nombre; // Vamos retornar en un nuevo arreglo los nombres que tengan 4 caracteres
 	}
 });
 console.log(nombres4Letras);

 /* 
	7 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/
 console.log(nombres.includes('Julio')); // Preguntamos si el array contiene 'Julio'
 console.log(nombres.includes('Carlos')); // Preguntamos si el array contiene 'Carlos'

 /* 
	8 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/
 const nombresValidos = nombres.every((nombre) => {
 	if (typeof nombre === 'string') { // Preguntamos si el tipo de dato de la variable es string
 		return true;
 	} else {
 		return false;
 	}
 });
 console.log('¿Todos los nombres son validos? ' + nombresValidos);

 /* 
	9 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición.
*/
const nombresValidos2 = nombres.some((nombre) => {
	if (typeof nombre !== 'string') { // Preguntamos si el tipo de dato de la variable es diferente de string
		return true;
	} else {
		return false;
	}
});
console.log('¿El arreglo es invalido? ' + nombresValidos2);
// true si hay algun valor invalido
// false si no hay algun valor invalido