
/*
	1 .length - Devuelve el número de caracteres de una cadena de texto.
*/
 const texto = 'Hola yo soy Nestor!';
 console.log(texto.length);

/*
	2 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
*/
const texto2 = 'Hola yo soy Nestor!';
console.log(texto2.indexOf('o')); // Me devuelve la primera posicion en la que se encuentra el caracter

console.log(texto2.lastIndexOf('o')); // Me devuelve la ultima posicion en la que se encuentra el caracter

/*
	3 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/

 const texto3 = 'Hola yo soy Carlos!';
 const index = texto3.indexOf('s'); // Busca el primer index de 's'
 const lastIndex = texto3.lastIndexOf('s'); // Busca el ultimo index de 's'

 console.log(texto3.slice(index, lastIndex + 1));

 /*
	4 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
 const texto4 = 'Hola yo soy Carlos!';
 console.log(texto4.replace('Carlos', 'Nestor'));

/*
	5 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
 const texto5 = 'Hola yo soy Carlos!';
 console.log(texto5.split(' ')); 

/*
	6 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
 console.log(texto5.toUpperCase());
 console.log(texto5.toLowerCase());
 
 /*
	7 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
const texto6 = '     Hola yo soy Carlos!    ';
console.log(texto6);
console.log(texto6.trim());
console.log(texto6.trimStart());
console.log(texto6.trimEnd());