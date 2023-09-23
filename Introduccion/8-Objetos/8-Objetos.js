// Declaracion de un objeto

const Persona = { // Objeto
    // Atributos
    nombre: 'Nestor',
    edad: 19,
    correo: 'nestorjhoel@gmail.com',
    suscripciones: { // Otro objeto
        web: true,
        correo: true
    },
    coloresFavoritos: ['Negro', 'Rojo'], // Arreglo
    saludo:function (){ // Metodo
        alert('Hola');
    }, // Esta ultima coma es opcional
};

console.log(Persona.nombre); // Imprimimos el nombre
console.log(Persona['edad']); // Esta es otra forma de acceder a los atributos
Persona.saludo();// Asi accedemos al atributo que tiene un metodo