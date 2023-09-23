// Estructura de una condicional

const Usuario = {
    edad: 27,
    pais: 'Mexico',
    ticket: true, // Esta ultima coma es opcional
};


if (Usuario.edad > 17) { // Con Usuario.edad: accedemos al atributo edad del objeto Usuario
    console.log('El usuario es mayor de edad, puede entrar al concierto.');
}else{
    console.log('El usuario no es mayor de edad, no puede entrar al concierto.');
}