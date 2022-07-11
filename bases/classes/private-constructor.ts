(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor( public name: string) {

        }

        static callApocalipsis(): Apocalipsis {
            if( !Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis!');
            }
            return Apocalipsis.instance;
        }

        changeName( newName: string) :void {
            this.name = newName;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis.changeName('Xavier');


    console.log(apocalipsis, apocalipsis2, apocalipsis3);

})()