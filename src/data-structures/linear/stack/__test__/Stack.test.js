const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { Stack } = require("../Stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });
  describe("push()", () => {
    it("adds an element to the top of the stack", () => {
      stack.push(1);
      expect(stack.peek()).toBe(1);

      stack.push(2);
      expect(stack.peek()).toBe(2);
    });
  });
  describe("pop()", () => {
    it("removes and returns the element at the top of the stack", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
      expect(stack.pop()).toBeUndefined();
    });
  });
  describe("getTop()", () => {
    it("returns the element at the top of the stack without removing it", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.getTop()).toBe(2);
      expect(stack.getTop()).toBe(2);
    });
  });

  describe("isEmpty()", () => {
    it("returns true if the stack is empty, false otherwise", () => {
      expect(stack.isEmpty()).toBe(true);

      stack.push(1);
      expect(stack.isEmpty()).toBe(false);

      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    });
  });

  describe("deleteAll()", () => {
    it("removes all elements from the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.deleteAll();

      expect(stack.size).toBe(0);
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe("toString()", () => {
    it("returns a string representation of the stack", () => {
      stack.push(1);
      stack.push(2);

      expect(stack.toString()).toBe("1,2");
    });
  });
});
