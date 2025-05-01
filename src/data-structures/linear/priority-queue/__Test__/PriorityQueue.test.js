const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { PriorityQueue } = require("../PriorityQueue.js");

describe("PriorityQueue", () => {
  let priorityQueue;


  beforeEach(() => {
    priorityQueue = new PriorityQueue();
  });

  describe("constructor()", () => {
    it("should create a new empty priority queue", () => {
      expect(priorityQueue.size()).toEqual(0);
      expect(priorityQueue.isEmpty()).toEqual(true);
    });
  });

  describe("enqueue()", () => {
    it("should enqueue elements to the priority queue with priorities", () => {
      priorityQueue.enqueue("task1", 2);
      priorityQueue.enqueue("task2", 1);
      priorityQueue.enqueue("task3", 3);

      expect(priorityQueue.size()).toEqual(3);
      expect(priorityQueue.isEmpty()).toEqual(false);
    });
  });

  describe("dequeue()", () => {
    it("should dequeue elements from the priority queue in order of priority", () => {
      priorityQueue.enqueue("task1", 2);
      priorityQueue.enqueue("task2", 1);
      priorityQueue.enqueue("task3", 3);

      expect(priorityQueue.dequeue().element).toEqual("task2");
      expect(priorityQueue.dequeue().element).toEqual("task1");
      expect(priorityQueue.dequeue().element).toEqual("task3");
      expect(priorityQueue.size()).toEqual(0);
      expect(priorityQueue.isEmpty()).toEqual(true);
    });

    it("should return undefined when dequeueing from an empty priority queue", () => {
      expect(priorityQueue.dequeue()).toEqual(undefined);
    });
  });

  describe("front()", () => {
    it("should return the front element of the priority queue without removing it", () => {
      priorityQueue.enqueue("task1", 2);
      priorityQueue.enqueue("task2", 1);
      priorityQueue.enqueue("task3", 3);

      expect(priorityQueue.front().element).toEqual("task2");
      expect(priorityQueue.front().element).toEqual("task2");
      expect(priorityQueue.size()).toEqual(3);
    });

    it("should return undefined when peeking an empty priority queue", () => {
      expect(priorityQueue.front()).toEqual(undefined);
    });
  });
});