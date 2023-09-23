const fetchPosts = () => { // Esta funcion nos devuelve los post
	return new Promise((resolve, reject) => { // Retornamos un objeto Promise (promesa)
		setTimeout(() => {
			const posts = ['Post 1', 'Post 2', 'Post 3'];
			const error = true;

			if (error) {
				reject('Hubo un error al intentar obtener los posts'); // Si hay un error usamos reject
			} else {
				resolve(posts); // Si no hay un error usamos resolve
			}
		}, 2000);
	});
};

const mostrarPosts = async () => { // async: con async decimos que esta funcion sea asincrona y que podamos trabajar con await
	try {
        // Como la FUNCION fetchPosts() te devuelve algo la almacenamos en una variable llamadas posts
		const posts = await fetchPosts(); // await: quiero que esperes a que termine la promesa y no vas a ejecutar codigo hasta que te respondan algo
		console.log(posts);
	} catch (error) {
		console.log(error);
	}
};
mostrarPosts();