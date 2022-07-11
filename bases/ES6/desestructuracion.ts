(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

    // Destructuracion tradicional
    const { poder, vision } = avengers;
    console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ( { ironman, ...resto } : Avengers) => {
        console.log( ironman, resto );
    }

    printAvenger( avengers);

    // Destructuracion de arrays
    const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk'];

    // Tradicional
    const ironman_v = avengersArr[1];

    // ES 6
    const [ capitan, ironman, ] = avengersArr;
    console.log({ironman, capitan});

    // Otro ejemplo
    const arr: [string, boolean, number] = ['Ironman', true, 12.12312];

    const [ v1, v2, v3] = arr;


    console.log({v1, v3});

})()