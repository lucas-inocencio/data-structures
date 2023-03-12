const { expect, describe, it } = require("../../__test__/Expect.js");
const { ArrayBusyPeople } = require("./ArrayBusyPeople.js");

describe("ArrayBusyPeople", () => {
  let arr;
  describe("set()", () => {
    arr = new ArrayBusyPeople();

    it("sets the value of an element in the array", () => {
      arr.set(0, 1);
      expect(arr.get(0)).toEqual(1);

      arr.set(1, 2);
      expect(arr.get(1)).toEqual(2);
    });
  });

  describe("get()", () => {
    arr = new ArrayBusyPeople();

    it("returns the value of a defined element in the array", () => {
      arr.set(0, 1);
      expect(arr.get(0)).toEqual(1);

      arr.set(1, 2);
      expect(arr.get(1)).toEqual(2);
    });

    arr = new ArrayBusyPeople();

    it("returns the default value for an undefined element", () => {
      expect(arr.get(0)).toEqual(arr.defaultValue);
      expect(arr.get(255)).toEqual(arr.defaultValue);
    });
  });

  describe("isDefined()", () => {
    arr = new ArrayBusyPeople();

    it("returns true for a defined element", () => {
      arr.set(0, 1);
      expect(arr.isDefined(0)).toBe(true);

      arr.set(255, 2);
      expect(arr.isDefined(255)).toBe(true);
    });

    arr = new ArrayBusyPeople();

    it("returns false for an undefined element", () => {
      expect(arr.isDefined(0)).toBe(false);
      expect(arr.isDefined(255)).toBe(false);
    });

    arr = new ArrayBusyPeople();

    it("returns false for an out-of-bounds index", () => {
      expect(arr.isDefined(256)).toBe(false);
    });
  });
});
