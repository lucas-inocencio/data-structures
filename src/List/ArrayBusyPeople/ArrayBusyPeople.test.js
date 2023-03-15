const { expect, describe, it } = require("../../../test/unit_test.js");
const ArrayBusyPeople = require("./ArrayBusyPeople.js");

describe("ArrayBusyPeople", () => {
  describe("set()", () => {
    it("sets the value of an element in the array", () => {
      const ABP = new ArrayBusyPeople();
      ABP.set(0, 1);
      ABP.set(1, 2);
      expect(ABP.mainArray[0]).toEqual(1);
      expect(ABP.mainArray[1]).toEqual(2);
    });
  });

  describe("get()", () => {
    it("returns the value of a defined element in the array", () => {
      const ABP = new ArrayBusyPeople();
      ABP.set(0, 1);
      ABP.set(1, 2);
      expect(ABP.get(0)).toEqual(1);
      expect(ABP.get(1)).toEqual(2);
    });

    it("returns the default value for an undefined element", () => {
      const ABP = new ArrayBusyPeople();
      expect(ABP.get(0)).toEqual(ABP.defaultValue);
      expect(ABP.get(255)).toEqual(ABP.defaultValue);
    });
  });

  describe("isDefined()", () => {
    it("returns true for a defined element", () => {
      const ABP = new ArrayBusyPeople();

      ABP.set(0, 1);
      expect(ABP.isDefined(0)).toBe(true);

      ABP.set(255, 2);
      expect(ABP.isDefined(255)).toBe(true);
    });

    it("returns false for an undefined element", () => {
      const ABP = new ArrayBusyPeople();

      expect(ABP.isDefined(0)).toBe(false);
      expect(ABP.isDefined(255)).toBe(false);
    });

    it("returns false for an out-of-bounds index", () => {
      const ABP = new ArrayBusyPeople();
      expect(ABP.isDefined(256)).toBe(false);
    });
  });
});
