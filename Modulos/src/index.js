/*
    1.- Named Imports: Me permite exportar y importar en base a un nombre
 */
// Importamos una variable y funcion del archivo: './namedExports'
// import { nombre as nombreImportado, obtenerPosts } from './namedExports'; //nombre as nombreImportado: Importamos la variable nombre con un alias , por que el nombre de la variable ya esta registardo en este archivo

// const nombre = '123';

// console.log('Mi nombre es ' + nombre);
// console.log(obtenerPosts());

/*
    2.- Namespace Imports: Me va permitir importar todo en base a un alias
*/

// import * as datos from './namedExports'; // Quiero que importes todo con el alias datos del archivo './namedExports'
// console.log(datos.nombre); // Para acceder al dato importado primero llamamos al alias y luego invocamos al datos
// console.log(datos.obtenerPosts());

/*
    3.- Default Imports: Cuando trabajamos con default imports solamente estamos exportando y importando una sola cosa no multiples valores
*/

// En este ejemplo no le ponemos llaves al metodo, ya que no lo exportamos con ese nombre, solamente le estamos colocando un nombre en este archivo

// Ejemplo de la primera forma:
// import obtenerUsuario from './defaultExports'; // Quiero exportar la funcion con el nombre que yo quiera del archivo './defaultExports'
// console.log(obtenerUsuario());

// Ejemplo de la segunda forma:
// import obtener from './defaultExports'; // Quiero exportar la funcion con el nombre (que yo quiera) de obtener del archivo './defaultExports'
// console.log(obtener());

/*
    4.- Empty Imports: Nos van a permitir exportar cosas que no sean variables o funciones. Ejemplo: If's, ciclos, etc.
*/

import './emptyExport';// Aqui directamente se indica cual es el archivo que quiero importar
import { correo } from './emptyExport'; // Importamos la variable correo del archivo './emptyExport'
console.log(correo);
