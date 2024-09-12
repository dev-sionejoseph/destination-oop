const Person = require('../../classes/Person');
const Bag = require('../../classes/Bag');

describe('Person class tests', () => {
    
    test('can create Person instance', () => {
        const sisi = new Person('sisi', 'Japan');
        expect(sisi).toBeInstanceOf(Person);
    })  

    test('correctly assigns arguments', () => {
        const name = 'jasmine';
        const dest = 'Agrabah';
        const jasmine = new Person(name, dest);

        expect(jasmine.name).toBe(name);
        expect(jasmine.destination).toBe(dest);
    })

    test('#bags initializes as an empty array', () => {
        const tiana = new Person('Tiana', 'New Orleans');

        expect(tiana.getBags()).toEqual([]);
    })

    test('can add new bag to .bags', () => {
        const kida = new Person('Kida', 'Atlantis');
        const dior = new Bag(10, 105);
        kida.addBag(dior)

        expect(kida.getBags()).toEqual([dior]);
    })  

})