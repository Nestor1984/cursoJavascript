
// Objeto
const Usuario = {
    nombre: 'Nestor',
    pais: 'Bolivia',
};

// Sintaxis
switch (Usuario.pais) { // Llamamos al objeto Usuario y hacemos referencia al atributo Pais
    case 'Bolivia':
        console.log('El usuario es Boliviano');
        break;

    case 'Espania':
        console.log('El usuario es espaniol');
        break;

    case 'Argentina':
        console.log('El usuario es argentino');
        break;

    default:
        console.log('El usuario es de otro pais');
        break; // Esta ultima linea no es necesario que lleve break ya que es la ultima linea y la podemos omitir
}

