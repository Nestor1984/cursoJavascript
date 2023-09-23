/*Las promesas: son estructuras que nosotros vamos a poder definir para decirle al navegador 
que queremos que espere a que nosotros terminemos de hacer una operacion y que cuando nosotros
 terminemos la operacion le vamos a avisar y le vamos a responder con los datos*/

 const promesa = new Promise((resolve, reject) => { // const promesa = new Promise(callback(resolve: Es una funcion que vamos a poder usar dentro de este bloque de codigo, reject: Es una funcion que vamos a poder usar dentro de este bloque de codigo)): creamos una nueva promesa
	// Acción que se ejecutara.
	setTimeout(() => { // setTimeout(funcionQueQueremosEjecutar, cuandoPaseEstosMiliSegundos)
		const exito = false;

		if (exito) {
			resolve('La operación tuvo exito'); // Con el metodo resolve: nos comunicamos con el navegador en caso de que la operacion fuera exitosa
		} else {
			reject('La operación no tuvo exito'); // Con el metodo reject: nos comunicamos con el navegador en caso de que la operacion no tuviera exito
		}
	}, 4000);
});

// Le decimos al navegador que se quede atento a mi promesa
promesa.then((mensaje) => { // El metodo then: then(callback); este callback se va ejecutar cuando nosotros le respondamos al navegador que la operacion tuvo exito
	alert(mensaje);
});

promesa.catch((mensaje) => { // El metodo catch: catch(callback); este callback se va ejecutar cuando nosotros le respondamos al navegador que la operacion no tuvo exito
	alert(mensaje);
});
