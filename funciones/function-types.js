"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
})();
