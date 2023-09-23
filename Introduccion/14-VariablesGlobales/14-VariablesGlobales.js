/* Global Scope o Variables Globales
	- Son las variables declaradas fuera de una funcion.
	- Podemos acceder a ellas desde cualquier parte del código.
	- Podemos usar const, let y var.
*/

var nombre = 'Nestor'; // Como nombre es goblal podemos acceder a ella a traves de una funcion
console.log(nombre);

const saludo = () =>{ // Funcion de tipo fecha
    console.log('Hola ' + nombre);

    nombre = 'Jhoel';
    console.log('El nuevo nombre es: ' + nombre)
};

saludo();