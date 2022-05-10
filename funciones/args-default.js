"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no lastname'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no lastname'}`;
        }
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
