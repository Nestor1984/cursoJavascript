/*    Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/
var numero = 1;

var obtenerNumeroLetras = (nombre) => {
    var numeroDeLetras = nombre.length; // Variable local
    console.log(`${nombre} tiene ${numeroDeLetras} letras`);

    var funcionAnidada = () => {
        console.log(numero);
    };
    funcionAnidada();
};

obtenerNumeroLetras('Nestor');

