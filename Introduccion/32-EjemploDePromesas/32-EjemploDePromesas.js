const fetchPosts = () => { // fetchPosts: fetch significa que queremos hacer una peticion o que queremos obtener post
	return new Promise((resolve, reject) => { // Retornamos una promesa con return
		setTimeout(() => {
			const posts = ['Post 1', 'Post 2', 'Post 3']; // Estos son los post obtenidos
			const error = false; // Esta variable booleana va servir para detectar si hubo un error con el servidor

			if (error) {
				reject('Hubo un error al intentar obtener los posts'); // Si no tuvo exito utilizamos reject para comunicarnos con el navegador
			} else {
				resolve(posts); // Si tuvo exito utilizamos resolve para comunicarnos con el navegador
			}
		}, 2000); // setTimeout(quieroQueMeEjecutesUnaFuncion, DespuesDeEstosMiliSegundos);
	});
};

fetchPosts() // .then((posts) => {}): En caso de que la promesa fuera exitosa te voy a devolver los post para que hagas un console.log
	.then((posts) => { // Si la promesa fuera exitosa invocamos al metodo then y le enviamos como argumento un callback
		console.log(posts);
	})
	.catch((error) => { // Si la promesa no fuera exitosa llamamos al metodo catch y le enviamos como argumento un callback
		console.log(error);
	});

    