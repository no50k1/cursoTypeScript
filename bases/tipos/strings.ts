(() => {

    const batman: string = 'Batman';
    const linternaVede: string = "Linterna's Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;
    const abc = 123;

    console.log(`I'm ${ batman }, ${ abc.toString() }`);

    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || 'No está presente');

})()