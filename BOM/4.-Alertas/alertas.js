/*Dentro del navegador vamos a tener 3 tipos de ventanas diferentes*/

/*
	1.- Alerta
	Para informarle al usuario de algo.
*/

alert('Hola usuario!');

/*
	2.- Ventana de confirmación
	Una ventana donde el usuario puede aceptar o cancelar.
	Retorna verdadero o falso dependiendo de la respuesta del usuario.
*/

const ingresar = () => {
    const accesoPermitido = confirm('¿Eres mayor de edad?'); // confirm(): te muestra un boton de aceptar y cancelar
    if (accesoPermitido) {
        alert('Bienvenido!');
    }else{
        alert('Le vamos a decir a tus padres!');
    }
};

/*
	3.- Ventana con input
	Una ventana donde el usuario puede introducir un valor
	Retorna una cadena de texto con la respuesta del usuario.
*/

const saludo = () => {
    const nombre = prompt('Escribe tu nombre'); // prompt():es un método del objeto Window de JavaScript que se usa para mostrar un cuadro de diálogo con un mensaje que solicita al usuario que ingrese algún texto o información
    alert(`Bienvenido ${nombre}`);
};