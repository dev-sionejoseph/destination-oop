const Bag = require('../../classes/Bag');
const Person = require('../../classes/Person');

describe('Bag class tests', () => {
    test('can create instane of Bag', () => {
        const telfar = new Bag(10, 100);
        expect(telfar).toBeInstanceOf(Bag);
    });
    
    test('correctly assigns arguments', () => {
        const weight = 10;
        const id = 101;
        const chanel = new Bag(weight, id);

        expect(chanel.weight).toBe(weight);
        expect(chanel.id).toBe(id);
    })

    test('can get initial owner', () => {
        const birkin = new Bag(10,102);

        expect(birkin.getOwner()).toBe(null);
    })

    test('can add Person as owner', () =>{
        const mugler = new Bag(10,103);
        const sisi = new Person('sisi', 'Japan');
        mugler.assignOwner(sisi);

        expect(mugler.getOwner()).toBe(sisi);
    })
})