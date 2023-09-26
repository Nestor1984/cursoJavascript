// El navegador web nos va permitir acceder a diferentes funciones mediante un objeto especial llamado window
console.log(window);

// Con el objeto window podemos acceder a varios metodos. Por ejemplo:
// Metodo alert
window.alert('Hola');

// NOTA: Todos los metodos que tenemos disponibles dentro de window son globales y podemos acceder a ellos sin llamar al objeto window

// - Para ver el alto y ancho de la ventana de tu navegador
console.log(`La ventana de tu navegador mid ${window.innerWidth}px de ancho`); // innerWidth: me va permitir el tamanio en el ancho del navegador
console.log(`La ventana de tu navegador mid ${window.innerHeight}px de ancho`); // innerWidth: me va permitir el tamanio en el alto del navegador

/* 
	1.- window.open()
	Nos permite abrir ventanas del navegador (Como target="_blank")
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana. Por ejemplo: la direccion de google https://google.com (opcional)
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones (Como por ejemplo de que tamanio quieres abrir la ventana)

	Nos devuelve un objeto para acceder a esa ventana
*/

let ventana; // Definimos esta variable afuera para poder acceder a ella en los dos metodos que tenemos (abrirVentana y cerrarVentana)

// - Metodo para abrir una nueva ventana con onclick
const abrirVentana = () => {
  //Sintaxis:
  //variable = window.open('ventanaEnBlanco', 'NombreDeLaVentana', 'ancho=500,alto=500');
	ventana = window.open('', 'Mi nueva ventana', 'width=500,height=500'); // open(): este metodo te puede abrir una nueva ventana
	ventana.document.write('<h1>Hola, escribiendo en la nueva ventana!</h1>'); // document.white: permite escribir texto o html
};

// - Metodo para cerrar una nueva ventana con onclick
const cerrarVentana = () => {
	ventana.close(); // close(): este metodo te cierra la ventana
};

/*
	2.- Screen Object: screen es un objeto
	Representa la pantalla del usuario.
*/

console.log('Ancho de pantalla:', window.screen.width); // screen.width: accedemos al ancho de la pantalla del monitor del usuario
console.log('Alto de pantalla:', window.screen.height); // screen.height: accedemos al alto de la pantalla del monitor del usuario

console.log('Ancho de pantalla sin barra de Windows:', window.screen.availWidth); // window.screen.availWidth: accedemos al ancho de la pantalla del monitor del usuario sin la barra de windows
console.log('Alto de pantalla sin barra de Windows:', window.screen.availHeight); // window.screen.availHeight: accedemos al alto de la pantalla del monitor del usuario sin la barra de windows
