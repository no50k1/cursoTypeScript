(() => {

    let avenger: any = 123;
    let exits;
    let power;

    avenger = 'Dr Strange';
    //console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0));

    avenger = 150.2341231241;
    console.log(avenger.toFixed(3));
    console.log(<number>avenger.toFixed(3));

})()