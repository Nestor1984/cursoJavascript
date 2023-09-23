/**
	 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
 */

class Usuario{

    // Atributos o propiedades
    tipo = 'usuario';

    // Metodos

    // Metodo constructor
    constructor(nombre, apellido){
        this.nombre = nombre; // Si la propiedad nombre no existe la va crear
        this.apellido = apellido; // Si la propiedad apellido no existe la va crear
    
        console.log('Nuevo usuario registrado');
    }

    // Metodos personalizados
    obtenerNombreCompleto(){
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }

}

// Creamos un objeto
const usuario = new Usuario('Nestor Jhoel', 'Mamani');
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new Usuario('Carla Gironda', 'Vargas');
console.log(usuario2.obtenerNombreCompleto());
