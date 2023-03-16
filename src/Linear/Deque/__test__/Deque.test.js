const { expect, describe, it } = require("../../../../test/unit_test.js");
const { Deque } = require("../Deque.js");

describe("Deque", () => {
  describe("addFront", () => {
    it("should add an element to the front of the deque", () => {
      const deque = new Deque();
      deque.addFront(1);
      deque.addFront(2);
      expect(deque.toString()).toEqual("2,1");
    });
  });

  describe("addBack()", () => {
    it("should add an element to the back of the deque", () => {
      const deque = new Deque();

      deque.addBack(1);
      deque.addBack(2);
      expect(deque.toString()).toEqual("1,2");
    });
  });

  describe("removeFront()", () => {
    it("should remove and return the front element of the deque", () => {
      const deque = new Deque();

      deque.addBack(1);
      deque.addBack(2);
      expect(deque.removeFront()).toEqual(1);
      expect(deque.toString()).toEqual("2");
    });

    it("should return undefined if the deque is empty", () => {
      const deque = new Deque();

      expect(deque.removeFront()).toBeUndefined();
    });
  });

  describe("removeBack()", () => {
    it("should remove and return the back element of the deque", () => {
      const deque = new Deque();

      deque.addBack(1);
      deque.addBack(2);
      expect(deque.removeBack()).toEqual(2);
      expect(deque.toString()).toEqual("1");
    });

    it("should return undefined if the deque is empty", () => {
      const deque = new Deque();

      expect(deque.removeBack()).toBeUndefined();
    });
  });

  describe("peekFront()", () => {
    it("should return the front element of the deque without removing it", () => {
      const deque = new Deque();

      deque.addBack(1);
      deque.addBack(2);
      expect(deque.peekFront()).toEqual(1);
      expect(deque.toString()).toEqual("1,2");
    });

    it("should return undefined if the deque is empty", () => {
      const deque = new Deque();
      expect(deque.peekFront()).toBeUndefined();
    });
  });

  describe("peekBack()", () => {
    it("should return the back element of the deque without removing it", () => {
      const deque = new Deque();

      deque.addBack(1);
      deque.addBack(2);
      expect(deque.peekBack()).toEqual(2);
      expect(deque.toString()).toEqual("1,2");
    });

    it("should return undefined if the deque is empty", () => {
      const deque = new Deque();

      expect(deque.peekBack()).toBeUndefined();
    });
  });

  describe("size()", () => {
    it("should return the number of elements in the deque", () => {
      const deque = new Deque();

      expect(deque.size()).toEqual(0);
      deque.addBack(1);
      deque.addBack(2);
      expect(deque.size()).toEqual(2);
    });
  });

  describe("isEmpty()", () => {
    it("should return true if the deque is empty", () => {
      const deque = new Deque();

      expect(deque.isEmpty()).toBe(true);
    });

    it("should return false if the deque is not empty", () => {
      const deque = new Deque();

      deque.addBack(1);
      expect(deque.isEmpty()).toBe(false);
    });
  });

  describe("clear()", () => {
    it("should remove all elements from the deque", () => {
      const deque = new Deque();

      deque.addBack(1);
      deque.addBack(2);
      deque.clear();
      expect(deque.size()).toEqual(0);
      expect(deque.isEmpty()).toBe(true);
      expect(deque.toString()).toEqual("");
    });
  });

  describe("toString()", () => {
    it("should return a string representation of the deque", () => {
      const deque = new Deque();

      deque.addBack(1);
      deque.addBack(2);
      expect(deque.toString()).toBe("1,2");
    });
    it("should return an empty string when getting a string representation of an empty queue", () => {
      const queue = new Deque();

      expect(queue.toString()).toEqual("");
    });
  });
});
