const Plane = require('../../classes/Plane');
const Person = require('../../classes/Person')

describe('Plane class tests', () =>{

    test('correctly assigns arguments', () => {
        const comp = 'American';
        const dest = 'LAX'
        const plane = new Plane(comp, dest);

        expect(plane.company).toBe(comp);
        expect(plane.origin).toEqual('MSY');
        expect(plane.destination).toBe(dest);
    })

    test('#passengers initializes as an empty array', () => {
        const plane = new Plane('Delta', 'PDX')

        expect(plane.getPassengers()).toEqual([]);
    })

    test('able to add Person to #passengers', () => {
        const plane = new Plane('Southwest', 'HOU');
        const chappell = new Person('Chappel', 'Rome');
        plane.addPassenger(chappell);

        expect(plane.getPassengers()).toEqual([chappell]);

    })
})