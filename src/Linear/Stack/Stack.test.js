const { expect, describe, it } = require("../../../test/unit_test.js");
const { Stack } = require("./Stack.js");

describe("Stack", () => {
  it("push() adds an element to the top of the stack", () => {
    const stack = new Stack();

    stack.push(1);
    expect(stack.peek()).toBe(1);

    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it("pop() removes and returns the element at the top of the stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  it("peek() returns the element at the top of the stack without removing it", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);
  });

  it("isEmpty() returns true if the stack is empty, false otherwise", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    expect(stack.isEmpty()).toBe(false);

    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it("clear() removes all elements from the stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.clear();

    expect(stack.size).toBe(0);
    expect(stack.peek()).toBeUndefined();
  });

  it("toString() returns a string representation of the stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    
    expect(stack.toString()).toBe("1,2");
  });
});
