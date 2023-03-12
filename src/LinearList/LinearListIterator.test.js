const { expect, describe, it } = require("../__test__/unitTest.js");
const LinearListIterator = require("./LinearListIterator.js");
const LinearList = require("./LinearList.js");

describe("LinearListIterator", () => {
  const list = new LinearList();
  list.insert(0, "foo");
  list.insert(1, "bar");
  list.insert(2, "baz");

  describe("next", () => {
    it("should return the next element in the list", () => {
      const iterator = new LinearListIterator(list);
      expect(iterator.next()).toBe("foo");
      expect(iterator.next()).toBe("bar");
      expect(iterator.next()).toBe("baz");
    });

    it("should throw an error if there are no more elements", () => {
      const iterator = new LinearListIterator(list);
      iterator.next();
      iterator.next();
      iterator.next();
      expect(() => iterator.next()).toThrow();
    });
  });

  describe("hasNext", () => {
    it("should return true if there are more elements", () => {
      const iterator = new LinearListIterator(list);
      expect(iterator.hasNext()).toBe(true);

      iterator.next();
      expect(iterator.hasNext()).toBe(true);
    });

    it("should return false if there are no more elements", () => {
      const iterator = new LinearListIterator(list);
      iterator.next();
      iterator.next();
      iterator.next();
      expect(iterator.hasNext()).toBe(false);
    });
  });

  describe("remove", () => {
    it("should remove the last element returned by next", () => {
      const iterator = new LinearListIterator(list);
      iterator.next();
      iterator.remove();
      expect(list.length()).toBe(2);
      expect(list.get(0)).toBe("bar");
      expect(list.get(1)).toBe("baz");
    });

    it("should throw an error if next has not been called", () => {
      const iterator = new LinearListIterator(list);
      expect(() => iterator.remove()).toThrow();
    });

    it("should throw an error if remove is called twice in a row", () => {
      const iterator = new LinearListIterator(list);
      iterator.next();
      iterator.remove();
      expect(() => iterator.remove()).toThrow();
    });
  });
});
