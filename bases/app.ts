// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar() : void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFn {
  (ciudadano: string[]) : number;
}


const ciudadGotica : CiudadGoticaFn = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface datos {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio() : void;
}

class Persona implements datos {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  imprimirBio(): void {
      console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años...`);
  }
}