const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { Deque } = require("../Deque.js");

describe("Deque", () => {
  let deque;

  beforeEach(() => {
    deque = new Deque();
  });

  describe("insertFront", () => {
    it("should add an element to the front of the deque", () => {
      deque.insertFront(1);
      deque.insertFront(2);
      expect(deque.toString()).toEqual("2,1");
    });
  });

  describe("insertBack()", () => {
    it("should add an element to the back of the deque", () => {
      deque.insertBack(1);
      deque.insertBack(2);
      expect(deque.toString()).toEqual("1,2");
    });
  });

  describe("deleteFront()", () => {
    it("should delete and return the front element of the deque", () => {
      deque.insertBack(1);
      deque.insertBack(2);
      expect(deque.deleteFront()).toEqual(1);
      expect(deque.toString()).toEqual("2");
    });

    it("should return undefined if the deque is empty", () => {
      expect(deque.deleteFront()).toBeUndefined();
    });
  });

  describe("deleteBack()", () => {
    it("should delete and return the back element of the deque", () => {
      deque.insertBack(1);
      deque.insertBack(2);
      expect(deque.deleteBack()).toEqual(2);
      expect(deque.toString()).toEqual("1");
    });

    it("should return undefined if the deque is empty", () => {
      expect(deque.deleteBack()).toBeUndefined();
    });
  });

  describe("getFront()", () => {
    it("should return the front element of the deque without removing it", () => {
      deque.insertBack(1);
      deque.insertBack(2);
      expect(deque.getFront()).toEqual(1);
      expect(deque.toString()).toEqual("1,2");
    });

    it("should return undefined if the deque is empty", () => {
      expect(deque.getFront()).toBeUndefined();
    });
  });

  describe("getBack()", () => {
    it("should return the back element of the deque without removing it", () => {
      deque.insertBack(1);
      deque.insertBack(2);
      expect(deque.getBack()).toEqual(2);
      expect(deque.toString()).toEqual("1,2");
    });

    it("should return undefined if the deque is empty", () => {
      expect(deque.getBack()).toBeUndefined();
    });
  });

  describe("size()", () => {
    it("should return the number of elements in the deque", () => {
      expect(deque.size()).toEqual(0);
      deque.insertBack(1);
      deque.insertBack(2);
      expect(deque.size()).toEqual(2);
    });
  });

  describe("isEmpty()", () => {
    it("should return true if the deque is empty", () => {
      expect(deque.isEmpty()).toBe(true);
    });

    it("should return false if the deque is not empty", () => {
      deque.insertBack(1);
      expect(deque.isEmpty()).toBe(false);
    });
  });

  describe("deleteAll()", () => {
    it("should delete all elements from the deque", () => {
      deque.insertBack(1);
      deque.insertBack(2);
      deque.deleteAll();
      expect(deque.size()).toEqual(0);
      expect(deque.isEmpty()).toBe(true);
      expect(deque.toString()).toEqual("");
    });
  });

  describe("toString()", () => {
    it("should return an empty string when getting a string representation of an empty queue", () => {
      expect(deque.toString()).toEqual("");
    });
    it("should return a string representation of the deque", () => {
      deque.insertBack(1);
      deque.insertBack(2);
      expect(deque.toString()).toBe("1,2");
    });
  });
});
