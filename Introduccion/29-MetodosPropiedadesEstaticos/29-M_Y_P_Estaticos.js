
class Usuario{

   constructor(nombre, correo){
    this.nombre = nombre;
    this.correo = correo;
   }

   static borrar(id_usuario){ // Metodo estatico para borrar el usuario
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`);
   }

   // Propiedades o atributos estaticos
   static registrados = 100;

}

Usuario.borrar(1); // Llamamos al objeto y invocamos al metodo
console.log(Usuario.registrados);// Llamamos al objeto y invocamos al atributo o propiedad estatico
