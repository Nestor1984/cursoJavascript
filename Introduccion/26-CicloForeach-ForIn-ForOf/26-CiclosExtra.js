/*
	1- Ciclo forEach
	Es un método de los arreglos que podemos usar para recorrer los elementos.

    Sintaxis:
    nombreDelArray.forEach( (variableMagica, indice) => {
        codigo....
    } );
*/
console.log('1- Ciclo forEach');
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.forEach((amigo, index) => {
    console.log(`El amigo #${index} es: ${amigo}`);
});

/*
	2- Ciclo for in
	Nos permite recorrer las propiedades de un objeto.

    Sintaxis:
    for (propiedadOAtributoDelObjeto in nombreDelObjeto) {
 	persona[propiedad] = '';
 }
*/

console.log('2- Ciclo for in');
 const persona = {
 	nombre: 'Carlos',
 	edad: 27,
 	correo: 'correo@correo.com',
 };

 for (propiedad in persona) {
    // Borramos cada uno de los atributos o propiedades del objeto persona
 	persona[propiedad] = '';
 }
 console.log(persona); // Imprimimos el objeto luego de borrar los atributos o propiedades

 /*
	3- Ciclo for of
	Nos permite recorrer los valores de un objeto iterable.
	Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Listas de Nodos, etc
    
    Sintaxis:
    for (elemento of constanteOVariable) {
 	console.log(elemento);
    }
*/

console.log('3- Ciclo for of');

const etiquetas = document.head.children; // document.head.children: quiero acceder al documento de mi pagina web, quiero acceder al head y obtener children (es decir todas las etiquetas dentro de head) y las quiero guardar en esta constante
console.log(etiquetas);

// Mostramos una coleccion de elementoss html
 for (elemento of etiquetas) {
 	console.log(elemento);
 }

 // 4 - Truco
 console.log('4- Truco');

 [...etiquetas].forEach((elemento) => {  // Tomamos las etiquetas de la constante y la guardamos en un array con spread y lo mostramos con foreach
    console.log(elemento);
 });