/* Callbacks: son funciones que podemos pasar como parametro a otra funcion, y esto es con el fin de que 
a una funcion simplemente pueda llamar o pueda ejecutar otra funcion.*/

// Resumen: un callback es simplemente una funcion

// Ejemplo:
// Sintaxis de invocacion: obtenerPostDeUsuario('nombre', callback);

const obtenerPostDeUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post de ${usuario} ...`);

    // Vamos a simular de estoy obteniendo los posts de base de datos
    setTimeout(() => { // setTimeout(ejecutarAlgo, despuesDeEsteTiempo);
		let posts = ['Post1', 'Post2', 'Post3'];
		callback(posts); // Invocamos al callback (segundo parametro)
	}, 2000); // Quiero ejecutar una funcion (primer parametro) despues de que pasen 2000 mili segundos (2 segundos)    

}

obtenerPostDeUsuario('nestor', (posts) => { // Una vez que termine ese proceso de obtener los post, lo que van a hacer es que van a invocar la funcion que tu les pasaste, esto va ser util por que dentro de esta funcion dentro de las llaves ellos te van a poder devolver informacion 
    console.log(posts);
});

