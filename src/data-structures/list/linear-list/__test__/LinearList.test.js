const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { LinearList } = require("../LinearList.js");

describe("LinearList", () => {
  let linearList;

  beforeEach(() => {
    linearList = new LinearList();
  });
  describe("constructor()", () => {
    it("should create empty linear list", () => {
      expect(linearList.length()).toBe(0);
    });
  });
  describe("set()", () => {
    it("should set a element of the list", function () {
      linearList.insert(0, 1);
      linearList.set(0, 2);
      expect(linearList.get(0)).toBe(2);
    });
  });

  describe("get()", () => {
    it("should get a element of the list", function () {
      linearList.insert(0, 1);
      expect(linearList.get(0)).toBe(1);
    });
  });

  describe("length()", () => {
    it("should return the length of linear list", function () {
      expect(linearList.length()).toBe(0);
    });
  });

  describe("insert()", () => {
    it("should insert a element on list", function () {
      linearList.insert(0, 1);
      expect(linearList.elements).toEqual([1]);
    });
  });

  describe("delete()", () => {
    it("should delete a element on list", function () {
      linearList.insert(0, 1);
      linearList.insert(1,2);
      linearList.delete(0);
      expect(linearList.get(0)).toEqual(2);
    });
  });

  describe("find()", () => {
    it("should find a element on list", function () {
      linearList.elements = [1, 2];
      expect(linearList.find(2)).toEqual(1);
    });
  });

  describe("split()", () => {
    it("should split a element on list", function () {
      linearList.elements = [1, 2];
      const splited = linearList.split();
      expect((splited[0].elements, splited[1].elements)).toEqual(([1], [2]));
    });
  });

  describe("concatenate()", () => {
    it("should concatenate a element on list", function () {
      linearList.elements = [1];
      linearList.concatenate([2]);
      expect(linearList.elements).toEqual([1, 2]);
    });
  });
});
