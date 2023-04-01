const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { SinglyLinkedList } = require("../SinglyLinkedList");

describe("SinglyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  it("should create an empty list", () => {
    expect(list.size()).toBe(0);
  });

  it("should insert new elements at the end of the list", () => {
    list.insert(1);
    list.insert(2);
    expect(list.size()).toBe(2);
    expect(list.get(0).value).toBe(1);
    expect(list.get(1).value).toBe(2);
  });

  it("should allow setting element values", () => {
    list.insert(1);
    list.set(0, 2);
    expect(list.get(0).value).toBe(2);
  });

  it("should delete elements at the specified index", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.delete(1);
    expect(list.size()).toBe(2);
    expect(list.get(0).value).toBe(1);
    expect(list.get(1).value).toBe(3);
  });

  it("should not delete elements if index is out of bounds", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.delete(-1);
    list.delete(3);
    expect(list.size()).toBe(3);
    expect(list.get(0).value).toBe(1);
    expect(list.get(1).value).toBe(2);
    expect(list.get(2).value).toBe(3);
  });

  it("should return undefined for out of bounds indexes", () => {
    list.insert(1);
    list.insert(2);
    expect(list.get(-1)).toBeUndefined();
    expect(list.get(2)).toBeUndefined();
  });
});
