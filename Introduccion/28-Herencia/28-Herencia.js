
// Super clase o clase padre
class Usuario{

    // Metodos
    constructor(usuario, password){
        this.usuario = usuario; // Como el atributo usuario no existe javascript la va crear
        this.password = password; // Como el atributo password no existe javascript la va crear
    }

    obtenerPosts(){
        const posts = ['post1', 'post2'];
        return posts;
    }
}

// Sub clase o clase hija
class Moderador extends Usuario{ // Heredamos atributos y metodos de Usuario
    
    constructor(usuario, password, permisos){
        super(usuario, password); // Con super() llamamos al constructor de la super clase
        this.permisos = permisos; // Como el atributo permisos no existe javascript la va crear
    }

    // Metodos personalizados
    borrarPost(id){
        if (this.permisos.includes('borrar')) { // Si el arreglo incluye los permisos de borrar
            console.log(`El post con el ${id} ha sido borrado`);
        }else{
            console.log('No tienes los permisos para borrar post');
        }
    }

}

// Hacemos una instancia
const usuario = new Usuario('Nestor', '123');
console.log(usuario.obtenerPosts());

const usuario2 = new Moderador('Arturo', '456',  ['editar', 'borrar']); // Invocamos al constructor de Moderador
console.log(usuario2.obtenerPosts());
console.log(usuario2.permisos);
usuario2.borrarPost(7);

