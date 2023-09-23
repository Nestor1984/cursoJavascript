/* 
	1- Break
	La sentencia break nos sirve para salir de bloques de tipo Switch.
	Pero tambien nos sirve para forzar la salida de un ciclo.
*/

console.log('Ejemplo: BREAK');
const nombres = ['Arturo', 'Andres', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'Angel'];

// nombres[i][0]: con esto estamos accediendo a la primera letra de cada nombre del array
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] !== 'A') { // Si encontramos un nombre que tiene la primera letra que no es la 'a' 
        console.log('ALTO! Hay un nombre que no empieza por la letra A');
        console.log(`${nombres[i]} no empieza por la letra A`);
        break; // vamos a parar la ejecucion
    }
    console.log(nombres[i]);
}

/* 
	2 Continue
	La sentencia continue nos sirve para saltar a la siguiente iteración.
*/
console.log('Ejemplo: CONTINUE');
const invitados = ['Carlos', 'Christian', 'Christoher', 'Jorge', 'Estefania', 'Erika', 'Manuel'];
console.log('Lista de personas aceptadas:');

// Queremos que salte a Jorge
for (let index = 0; index < invitados.length; index++) {
    if (invitados[index] === 'Jorge') { // Si tenemos un elemento en el array que sea igual a Jorge 
        continue; // Vamos a saltarlo
    }
    console.log(invitados[index]);
}