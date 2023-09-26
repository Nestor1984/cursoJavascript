'use strict';

console.log('Soy codigo que se ejecuta del archivo emptyExports.js');

const correo = 'correo@correo.com'; // si queremos acceder a esta variable desde index, tenemos que exportarla

/*
    1.- Named Imports: Me permite exportar y importar en base a un nombre
 */
// Importamos una variable y funcion del archivo: './namedExports'
// import { nombre as nombreImportado, obtenerPosts } from './namedExports'; //nombre as nombreImportado: Importamos la variable nombre con un alias , por que el nombre de la variable ya esta registardo en este archivo

console.log(correo);
