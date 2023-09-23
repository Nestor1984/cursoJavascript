// FUNCIONES
console.log('FUNCIONES');

// Forma #1
function saludo() {
    console.log('Hola!');
}

saludo(); // Invocamos al metodo

// Forma #2 Asignando una funcion a una variable
const saludo2 = function(){
    console.log('Hola desde variable!');
};

saludo2();

// Forma #3 Funcion de tipo flecha
const saludo3 = () => {
    console.log('Hola desde funcion de tipo flecha!'); // Como solo hay una sentencia, el punto y coma ya no es necesario
};

saludo3();

// PARAMETROS Y ARGUMENTOS DE UNA FUNCION
console.log('PARAMETROS Y ARGUMENTOS DE UNA FUNCION');
const saludo4 = (nombre) => {
    console.log(`Hola ${nombre}!`);
};

saludo4('Nestor');
saludo4('Carla');

// SENTENCIA RETURN
console.log('SENTENCIA RETURN');
const operacion = (tipo, num1, num2) => {
    let resultado;
    if (tipo === 'suma') {
        return resultado = num1 + num2;
    }else if (tipo === 'resta') {
        return resultado = num1 - num2;
    }
};

const miVariable = operacion('suma', 100, 11);
console.log(miVariable);


