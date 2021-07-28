
/////////////////////// CLASES //////////////////////////

class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    
    datosPropietario() {
       return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`
    }
}

class Animal extends Propietario {
    constructor(nombrePropietario, direccionPropietario, telefonoPropietario, tipo){
        super(nombrePropietario, direccionPropietario, telefonoPropietario)
            this._tipo = tipo;
        }

    get tipo() {
        return `El tipo del animal es: ${this._tipo}`
    }

}

class Mascota extends Animal {
    constructor(nombrePropietario, direccionPropietario, telefonoPropietario, tipoAnimal, nombreMascota, enfermedad) {
        super(nombrePropietario, direccionPropietario, telefonoPropietario, tipoAnimal)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return `${this._nombreMascota}`
    }
    
    get enfermedad() {
        return `${this._enfermedad}`
    }

    set nombreMascota(nuevoNombreMascota) {
        this._nombreMascota = nuevoNombreMascota;
    }

    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }
}

////////////////// Captura desde el DOM y creación de nuevas mascotas y dueños /////////////////////////


//  ES BUENO DEJAR COMO REFERENCIA Y LUEGO USARLA PARA OBTENER VALORES


const propietarioElement = document.querySelector("#propietario");
const telefonoElement = document.querySelector("#telefono");
const direccionElement = document.querySelector("#direccion");
const nombreMascotaElement = document.querySelector("#nombreMascota");
const tipoElement = document.querySelector("#tipo");
const enfermedadElement = document.querySelector("#enfermedad")

const submitElement = document.querySelector(".btn");
const resultadoElement = document.querySelector("#resultado")

submitElement.addEventListener("click", (event) => {
    event.preventDefault();

    const nombrePropietario = propietarioElement.value;
    const telefonoPropietario = telefonoElement.value;
    const direccionPropietario = direccionElement.value;
    const tipoAnimal = tipoElement.value;
    const enfermedad = enfermedadElement.value;
    const nombreMascota = nombreMascotaElement.value;
  //  console.log (nombrePropietario, telefonoPropietario, direccionPropietario, nombreMascota, tipoAnimal, enfermedad);

    const pet = new Mascota(nombrePropietario, direccionPropietario, telefonoPropietario, tipoAnimal, nombreMascota, enfermedad);
    resultadoElement.innerHTML = `
        <ul class="imprimicion">
        <li>${pet.datosPropietario()}</li>
        <li>${pet.tipo},
            mientras que el nombre de la mascota es: ${pet.nombreMascota} y la enfermedad es: ${pet.enfermedad}
        </li>
        </ul>
    `
})

