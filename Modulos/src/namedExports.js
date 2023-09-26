// namedExports: significa exporaciones en base a nombre

/*
// Forma 1 - Palabra export
// Podemos exportar variables y funciones

// Quiero exportar en base a nombre
export const nombre = 'Carlos'; 

// Quiero exportar en base a una funcion
export const obtenerPosts = () => {
    return ['Post1', 'Post2', 'Post3'];
};
*/

// Forma 2 - Final del documento
const nombre = 'Carlos';

const  obtenerPosts = () =>{
    return ['Post1', 'Post2', 'Post3'];
};

export {nombre, obtenerPosts}; // Quiero exportar el nombre y la funcion obtenerPost