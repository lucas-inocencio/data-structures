const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { PriorityQueue } = require("../PriorityQueue.js");

describe("PriorityQueue", () => {
  let priorityqueue;


  beforeEach(() => {
    priorityqueue = new PriorityQueue();
  });

  describe("constructor()", () => {
    it("should create a new empty priority queue", () => {
      expect(priorityqueue.size()).toEqual(0);
      expect(priorityqueue.isEmpty()).toEqual(true);
    });
  });

  describe("enqueue()", () => {
    it("should enqueue elements to the priority queue with priorities", () => {
      priorityqueue.enqueue("task1", 2);
      priorityqueue.enqueue("task2", 1);
      priorityqueue.enqueue("task3", 3);

      expect(priorityqueue.size()).toEqual(3);
      expect(priorityqueue.isEmpty()).toEqual(false);
    });
  });

  describe("dequeue()", () => {
    it("should dequeue elements from the priority queue in order of priority", () => {
      priorityqueue.enqueue("task1", 2);
      priorityqueue.enqueue("task2", 1);
      priorityqueue.enqueue("task3", 3);

      expect(priorityqueue.dequeue().element).toEqual("task2");
      expect(priorityqueue.dequeue().element).toEqual("task1");
      expect(priorityqueue.dequeue().element).toEqual("task3");
      expect(priorityqueue.size()).toEqual(0);
      expect(priorityqueue.isEmpty()).toEqual(true);
    });

    it("should return undefined when dequeueing from an empty priority queue", () => {
      expect(priorityqueue.dequeue()).toEqual(undefined);
    });
  });

  describe("front()", () => {
    it("should return the front element of the priority queue without removing it", () => {
      priorityqueue.enqueue("task1", 2);
      priorityqueue.enqueue("task2", 1);
      priorityqueue.enqueue("task3", 3);

      expect(priorityqueue.front().element).toEqual("task2");
      expect(priorityqueue.front().element).toEqual("task2");
      expect(priorityqueue.size()).toEqual(3);
    });

    it("should return undefined when peeking an empty priority queue", () => {
      expect(priorityqueue.front()).toEqual(undefined);
    });
  });
});