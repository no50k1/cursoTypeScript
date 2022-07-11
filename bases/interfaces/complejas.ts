(() => {
    
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string) : string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Cesar',
        age: 30,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Lima'
        },
        getFullAddress( id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 28,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2D U2A'
        },
        getFullAddress( id: string) {
            return this.address.city;
        }
    }

})()