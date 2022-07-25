function printToConsole( constructor: Function ) {
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false): Function => {
    if( print ) {
        return printToConsole;
    }
    else {
        return () => console.log("Hola Mundo");
    }
}


const bloquearPropotipo = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if(id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe estar entre 1 a 800');
            } else {
                return originalMethod(id);
            }
        }
        //descriptor.value = () => console.log('Hola Mundo');

    }
}

function readonly( isWritable: boolean = true) : Function {
    return function(targe: any, propertyKey: string){

        const descriptor: PropertyDescriptor = {
            get() { 
                console.log(this);
                return 'Cesar';
            },
            set(this, val) {
                //console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            },
        }

        return descriptor;
    }
}


@bloquearPropotipo
@printToConsoleConditional(true)
export class Pokemon {

    @readonly(true)
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB( id: number) {
        console.log(`Pokemon guardado en DB ${ id }`);
    }
}