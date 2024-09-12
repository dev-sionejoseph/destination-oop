const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane')

describe('Airport class test', () => {
    
    test('correctly assigns arguments', () => {
        const name = 'Louis Armstrong';
        const airport = new Airport(name);

        expect(airport.name).toBe(name);
        expect(airport.getPlanes()).toEqual([]);
    })

    test('airportCode initializes as the correct static value', () => {

        expect(Airport.airportCode).toEqual('MSY')
    })

    test('#planes initializes as an empty array', () => {
        const airport = new Airport('Louis Armstrong');
        expect(airport.getPlanes()).toEqual([]);
    })

    test('can add plane instance to #planes array', () => {
        const airport = new Airport('Louis Armstrong');
        const plane = new Plane('Delta', 'PDX');
        airport.addPlane(plane);

        expect(airport.getPlanes()).toEqual([plane]);
    })  

})