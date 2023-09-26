/*
location : es un objeto
*/

// href - Retorna la URL de la página actual
console.log(location.href); // (esta instruccion es muy usada)

// hostname - Retorna el host de la página actual
console.log(location.hostname);

// pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);

// procotol - Retorna el protocolo utilizado
console.log(location.protocol);

// - Queremos cargar un nuevo documento con onclick
const cargarDocumento = () => {
	location.assign('https://google.com'); // assign('direccionDelDocumentoQueQueremosCargar'): este metodo sirve para cambiar la pagina en la que nos encontramos (como la etiqueta <a> de html)
};

/*
    - El objeto history: me va permitir acceder a los botones de atras y adelante del navegador (<- ->)
*/

const regresar = () => {
    history.back(); // back(): el metodo back me va permitir volver hacia atras
};

const irAdelante = () => {
	history.forward(); // forward(): el metodo forward me va permitir ir hacia adelante
};
