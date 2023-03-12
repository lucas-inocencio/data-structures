const {expect, it, describe} = require("../../__test__/Expect.js");
const LinearList = require("./LinearList.js");

describe('LinearList Class test', () => {

    it('should create empty linear list', function() {
        const defaultLinearList = new LinearList();
        expect(defaultLinearList.list).toEqual([]);
    });

    it('should set a element of the list', function() {
        const defaultLinearList = new LinearList();
        defaultLinearList.list = [1];
        defaultLinearList.set(0, 2);
        expect(defaultLinearList.list).toEqual([2]);
    });

    it('should get a element of the list', function() {
        const defaultLinearList = new LinearList();
        defaultLinearList.list = [1];
        expect(defaultLinearList.get(0)).toBe(1);
    });

    it('should return the length of linear list', function() {
        const defaultLinearList = new LinearList();
        expect(defaultLinearList.length()).toBe(0);
    });

    it('should insert a element on list', function() {
        const defaultLinearList = new LinearList();
        defaultLinearList.insert(0, 1);
        expect(defaultLinearList.list).toBe([1]);
    });

    it('should delete a element on list', function() {
        const defaultLinearList = new LinearList();
        defaultLinearList.list = [1, 2];
        defaultLinearList.delete(0);
        expect(defaultLinearList.list).toBe([2]);
    });

    it('should find a element on list', function() {
        const defaultLinearList = new LinearList();
        defaultLinearList.list = [1, 2];
        expect(defaultLinearList.find(2)).toBe(1);
    });

    it('should split a element on list', function() {
        const defaultLinearList = new LinearList();
        defaultLinearList.list = [1, 2];
        expect(defaultLinearList.split()).toBe(([1],[2]));
    });

    it('should concatenate a element on list', function() {
        const defaultLinearList = new LinearList();
        defaultLinearList.list = [1];
        defaultLinearList.concatenate([2]);
        expect(defaultLinearList.list).toBe([1, 2]);
    });
});