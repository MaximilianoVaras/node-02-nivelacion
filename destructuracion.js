/**Destructuración en funciones(parametros), en arrays y para sacar propiedades dentro 
de un objeto.* 
 */
const personaje = {
    nombre: `Pepe`,
    apellido: `Argento`,
    profesion: `Zapatero`,
    getDescripcion() {
        return `${nombre} ${apellido} es ${profesion}`
    }
}

const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion;

const {nombre, apellido, profesion} = personaje;

console.log(nombre, apellido, profesion);

