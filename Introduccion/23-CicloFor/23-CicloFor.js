// Ciclo for

const mensaje = () => {
    console.log('Ciclo For');
};

mensaje();

// Arreglo
const nombres = ['Carlos', 'Christian', 'Christoher', 'Estefania', 'Erika', 'Manuel'];

for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
}

// Ejercicio 1:
console.log('Ejercicio 1: Contar numeros del 50 al 1:');

for (let index = 50; index > 0 ; index--) {
    console.log(index + ", ");
}
