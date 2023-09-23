/*
    1. Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

// Ejemplo 1: ARREGLO
const frutas = ['Manzana', 'Pera', 'Piña', 'Melon'];
const comidaFavorita = ['Pizza', 'Sushi', ...frutas]; // ...frutas: con esto copiamos el arreglo frutas al arreglo comidaFavorita
console.log(comidaFavorita);

// Ejemplo 2: OBJETO
 const datosLogin = {
 	nombre: 'Arturo',
 	correo: 'correo@correo.com',
 	password: '123',
 };

 const usuario = {
 	...datosLogin, // Hacemos spread
 	nombre: 'Carlos',
 	edad: 27,
 };

 console.log(usuario);

/*
	2 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/
 const registrarUsuario = (nombre, correo, ...datosAdicionales) => { // ...datosAdicionales: con esto decimos que vamos a tener parametros 'infinitos'
 	console.log(nombre, correo, datosAdicionales);
 };

 registrarUsuario('Carlos', 'correo@correo.com');
 registrarUsuario('Alejandro', 'alex@correo.com', 28, 'España');

 /*
	3 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

// Ejemplo 1: ARREGLO
const amigos = ['Alejandro', 'Cesar', 'Manuel'];

// La forma larga seria:
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];
// const tercerAmigo = amigos[2];

// La forma corta seria:
// const [primerAmigo, segundoAmigo, tercerAmigo] : Aqui declaramos 3 variables juntas
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos; // Aqui extraemos cada amigo del arreglo amigo en una variable
console.log(segundoAmigo);

// Ejemplo 2: OBJETO
const persona = {
	nombre: 'Carlos',
	edad: 27,
	pais: 'Mexico',
};

const {nombre, pais} = persona; // Quiero extraer el nombre y pais del objeto persona
// LO QUE VA HACER ES QUE VA CREAR UNA VARIABLE NOMBRE QUE VA CONTENER EL VALOR DE 'CARLOS', OTRO VARIABLE LLAMADA PAIS QUE VA CONTENER EL VALOR DE 'MEXICO'

console.log(nombre, pais); // Imprimimos nombre y pais

// Ejemplo 3: DESTRUCTURACION DE VALORES QUE LE PASAMOS A UNA FUNCION 
const mostrarEdad = (nombre, edad) => {
	console.log(`${nombre} tiene ${edad} anios`);
};
mostrarEdad(persona.nombre, persona.edad);