// NOTA: CON EXPORT DEFAULT SOLAMENTE PODEMOS EXPORATAR UNA SOLA COSA DEL ARCHIVO

// Forma 1 - mediante palabras export default
// export default() =>{ // Quiero exportar un solo valor del documento
//    return {
//        nombre: 'Carlos',
//        correo: 'correo@correo.com',
//    };
// }

// Forma 2 - Final del documento
const obtenerUsuario = () =>{ // Aqui si es necesario que la funcion la guardes en una variable
   return {
       nombre: 'Carlos',
       correo: 'correo@correo.com',
   };
};

export default obtenerUsuario; // Ahora exportamos la funcion 