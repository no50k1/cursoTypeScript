"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) { // para validar si viende firstName
            throw new Error('Nombre Requerido');
        }
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
//# sourceMappingURL=args-required.js.map