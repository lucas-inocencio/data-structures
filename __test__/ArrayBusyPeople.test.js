const {expect, it, describe} = require("./Expect.js");
const ArrayBusyPeople = require("../src/ArrayBusyPeople.js");

describe('ArrayBusyPeople Class test', () => {

    it('should create array for busy people of certain size', function() {
        const defaultArrayBusyPeople = new ArrayBusyPeople();
        expect(defaultArrayBusyPeople.main_array.length).toBe(256);
        expect(defaultArrayBusyPeople.aux_array.length).toBe(256);
        expect(defaultArrayBusyPeople.stack.length).toBe(0);
        expect(defaultArrayBusyPeople.value).toBe(-1);

        const biggerArrayBusyPeople = new ArrayBusyPeople(-1, 512);
        expect(biggerArrayBusyPeople.main_array.length).toBe(512);
        expect(biggerArrayBusyPeople.aux_array.length).toBe(512);
    });

    it('should check if the position has already been defined', function() {
        const defaultArrayBusyPeople = new ArrayBusyPeople();
        expect(defaultArrayBusyPeople.isDefined(0)).toBe(false);

        defaultArrayBusyPeople.set(0, 0);
        expect(defaultArrayBusyPeople.isDefined(0)).toBe(true);
    });

    it('should set value in main_array[position]', function() {
        const defaultArrayBusyPeople = new ArrayBusyPeople();
        defaultArrayBusyPeople.set(0, 1);
        expect(defaultArrayBusyPeople.get(0)).toBe(1);
        expect(defaultArrayBusyPeople.stack[0]).toBe(0);
        expect(defaultArrayBusyPeople.aux_array[0]).toBe(0);

        defaultArrayBusyPeople.set(0, 2);
        expect(defaultArrayBusyPeople.get(0)).toBe(2);
    });

    it('should get value in main_array[position]', function() {
        const defaultArrayBusyPeople = new ArrayBusyPeople();
        expect(defaultArrayBusyPeople.get(0)).toBe(-1);

        const newValueArrayBusyPeople = new ArrayBusyPeople(-2, 256);
        expect(newValueArrayBusyPeople.get(0)).toBe(-2);
    });
});
