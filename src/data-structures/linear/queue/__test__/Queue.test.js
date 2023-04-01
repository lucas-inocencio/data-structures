const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { Queue } = require("../Queue.js");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe("constructor()", () => {
    it("should create a new empty queue", () => {
      expect(queue.size()).toEqual(0);
      expect(queue.isEmpty()).toEqual(true);
    });
  });
  describe("enqueue()", () => {
    it("should enqueue elements to the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.size()).toEqual(3);
      expect(queue.isEmpty()).toEqual(false);
    });
  });
  describe("dequeue()", () => {
    it("should dequeue elements from the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
      expect(queue.size()).toEqual(0);
      expect(queue.isEmpty()).toEqual(true);
    });

    it("should return undefined when dequeueing from an empty queue", () => {
      expect(queue.dequeue()).toEqual(undefined);
    });
  });
  describe("peek()", () => {
    it("should return the front element of the queue without removing it", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.peek()).toEqual(1);
      expect(queue.peek()).toEqual(1);
      expect(queue.size()).toEqual(3);
    });

    it("should return undefined when peeking an empty queue", () => {
      expect(queue.peek()).toEqual(undefined);
    });
  });
  describe("clear()", () => {
    it("should clear the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      queue.clear();

      expect(queue.size()).toEqual(0);
      expect(queue.isEmpty()).toEqual(true);
    });
  });
  describe("toString()", () => {
    it("should return a string representation of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.toString()).toEqual("1,2,3");
    });

    it("should return an empty string when getting a string representation of an empty queue", () => {
      expect(queue.toString()).toEqual("");
    });
  });
});
