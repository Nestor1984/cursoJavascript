const usuario = {
	nombre: 'Carlos',
	edad: 27,
	amigos: ['Alejandro', 'Cesar', 'Manuel'],
	saludo: () => {
		console.log('Hola!');
	},
};

/*
	1. Métodos propios
	Los objetos pueden tener métodos personalizados.
*/
 usuario.saludo(); // Metodos que nosotros creamos

/*
	2. Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
 const resultados = Object.keys(usuario); // Enviamos de argumento el objeto

 console.log(resultados); // Imprimira las propiedades del arreglo usuario

 /*
	3. Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/
 const resultados2 = Object.values(usuario); // Enviamos de argumento el objeto

 console.log(resultados2); // Imprimira los valores del arreglo usuario 

 /*
	4. Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
const resultados3 = Object.entries(usuario); // Enviamos de argumento el objeto

console.log(resultados3);

// Mostramos el numero de propiedades que tiene el array
console.log(`El objeto tiene ${resultados3.length} propiedades`);