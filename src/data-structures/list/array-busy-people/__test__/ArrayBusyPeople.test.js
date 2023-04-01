const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { ArrayBusyPeople } = require("../ArrayBusyPeople.js");

describe("ArrayBusyPeople", () => {
  let ABP;

  beforeEach(() => {
    ABP = new ArrayBusyPeople();
  });
  describe("set()", () => {
    it("sets the value of an element in the array", () => {
      ABP.set(0, 1);
      ABP.set(1, 2);
      expect(ABP.mainArray[0]).toEqual(1);
      expect(ABP.mainArray[1]).toEqual(2);
    });
  });

  describe("get()", () => {
    it("returns the value of a defined element in the array", () => {
      ABP.set(0, 1);
      ABP.set(1, 2);
      expect(ABP.get(0)).toEqual(1);
      expect(ABP.get(1)).toEqual(2);
    });

    it("returns the default value for an undefined element", () => {
      expect(ABP.get(0)).toEqual(ABP.defaultValue);
      expect(ABP.get(255)).toEqual(ABP.defaultValue);
    });
  });

  describe("isDefined()", () => {
    it("returns true for a defined element", () => {
      ABP.set(0, 1);
      expect(ABP.isDefined(0)).toBe(true);

      ABP.set(255, 2);
      expect(ABP.isDefined(255)).toBe(true);
    });

    it("returns false for an undefined element", () => {
      expect(ABP.isDefined(0)).toBe(false);
      expect(ABP.isDefined(255)).toBe(false);
    });

    it("returns false for an out-of-bounds index", () => {
      expect(ABP.isDefined(256)).toBe(false);
    });
  });
});
