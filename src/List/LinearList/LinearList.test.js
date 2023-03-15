const { expect, it, describe } = require("../../../test/unit_test.js");
const { LinearList } = require("./LinearList.js");

describe("LinearList Class test", () => {
  it("should create empty linear list", () => {
    const defaultLinearList = new LinearList();
    expect(defaultLinearList.length()).toBe(0);
  });

  it("should set a element of the list", function () {
    const defaultLinearList = new LinearList();
    defaultLinearList.elements = [1];
    defaultLinearList.set(0, 2);
    expect(defaultLinearList.elements).toEqual([2]);
  });

  it("should get a element of the list", function () {
    const defaultLinearList = new LinearList();
    defaultLinearList.elements = [1];
    expect(defaultLinearList.get(0)).toBe(1);
  });

  it("should return the length of linear list", function () {
    const defaultLinearList = new LinearList();
    expect(defaultLinearList.length()).toBe(0);
  });

  it("should insert a element on list", function () {
    const defaultLinearList = new LinearList();
    defaultLinearList.insert(0, 1);
    expect(defaultLinearList.elements).toEqual([1]);
  });

  it("should delete a element on list", function () {
    const defaultLinearList = new LinearList();
    defaultLinearList.elements = [1, 2];
    defaultLinearList.delete(0);
    expect(defaultLinearList.elements).toEqual([2]);
  });

  it("should find a element on list", function () {
    const defaultLinearList = new LinearList();
    defaultLinearList.elements = [1, 2];
    expect(defaultLinearList.find(2)).toEqual(1);
  });

  it("should split a element on list", function () {
    const defaultLinearList = new LinearList();
    defaultLinearList.elements = [1, 2];
    const splited = defaultLinearList.split();
    expect((splited[0].elements, splited[1].elements)).toEqual(([1], [2]));
  });

  it("should concatenate a element on list", function () {
    const defaultLinearList = new LinearList();
    defaultLinearList.elements = [1];
    defaultLinearList.concatenate([2]);
    expect(defaultLinearList.elements).toEqual([1, 2]);
  });
});
