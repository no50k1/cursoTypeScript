(() => {


    const hero: string = 'flash';

    function returnName(): string {
        return hero;
    }

    const activateBatisignal = () : string => {
        return 'Batiseñal activada!';
    }


    console.log(typeof activateBatisignal);

    const heroName = returnName();

})()