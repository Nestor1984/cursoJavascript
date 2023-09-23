/*
    1 .toString(): este metodo va permitir transformar un valor que sea de tipo numero a string

    */
 const numero = 10;
 console.log(numero, typeof numero); // typeof numero: devuelve de que tipo es 

 const texto = numero.toString(); // Tranformamos de numero a string
 console.log(texto, typeof texto);

/*
    2 .toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/
 const numero2 = 3.1415;
 console.log(numero2.toFixed(10)); //.toFixed(cantidadDeDecimales)

/*
	3 parseInt()
	Intenta transformar un valor a un entero.
*/
 const num1 = parseInt(prompt('Escribe un numero')); // prompt('Escribe un numero'): te manda una alerta (PARA RECIBIR UNA CADENA DE TEXTO)
 const num2 = parseInt(prompt('Escribe un numero')); // prompt('Escribe un numero'): te manda una alerta (PARA RECIBIR UNA CADENA DE TEXTO)
 console.log(num1 + num2);

 /*
	4 .parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/
 const numeroDecimal1 = parseFloat(prompt('Escribe un numero'));
 const numeroDecimal2 = parseFloat(prompt('Escribe un numero'));
 console.log(numeroDecimal1 + numeroDecimal2);

/*
    5 Math.random()
	Genera un numero al azar entre 0 y 1
*/
 const numeroAleatorio = Math.random();
 console.log(numeroAleatorio);

 /*
    6 Math.floor()
	Redondea hacia abajo un numero.
*/
console.log(Math.floor('10.1'));
console.log(Math.floor('10.99'));

/*
	7 Math.ceil()
	Redondea hacia arriba un numero.
*/
console.log(Math.ceil('10.1'));
console.log(Math.ceil('10.99'));

/*
    8 Math.round()
	Redondea hacia el entero mas cercano
*/
console.log(Math.round('10.1'));
console.log(Math.round('10.99'));

/*
    Ejemplo de numero al azar de 0 a 100
*/
const numeroAlAzar = Math.random();
console.log(Math.floor(numeroAlAzar * 101));
