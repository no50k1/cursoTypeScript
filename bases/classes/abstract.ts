(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo Salvado!';
        }
    }
    class Villian extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    const printName = (character: Mutante) => {
        console.log(character.realName);
    }

    printName( magneto );


})()