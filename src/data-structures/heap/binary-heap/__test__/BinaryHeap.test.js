const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { BinaryHeap } = require("../BinaryHeap.js");

describe("BinaryHeap", () => {
  let binaryHeap;


  beforeEach(() => {
    binaryHeap = new BinaryHeap();
  });

    it("should insert elements into the heap", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(20);
        binaryHeap.insert(5);
        expect(binaryHeap.heap).toEqual([20, 10, 5]);
    });

    it("should extract the maximum element from the heap", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(20);
        binaryHeap.insert(5);
        const maxElement = binaryHeap.extractMax();
        expect(maxElement).toBe(20);
        expect(binaryHeap.heap).toEqual([10, 5]);
    });

    it("should return the size of the heap", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(20);
        expect(binaryHeap.size()).toBe(2);
    });

    it("should return the maximum element without removing it", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(20);
        const maxElement = binaryHeap.peek();
        expect(maxElement).toBe(20);
        expect(binaryHeap.size()).toBe(2);
    });
    it("should return undefined when the heap is empty", () => {
        expect(binaryHeap.peek()).toBeUndefined();
    });
    it("should return true when the heap is empty", () => {
        expect(binaryHeap.isEmpty()).toBe(true);
    });
    it("should return false when the heap is not empty", () => {
        binaryHeap.insert(10);
        expect(binaryHeap.isEmpty()).toBe(false);
    });
    it("should maintain the heap property after extraction", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(20);
        binaryHeap.insert(5);
        binaryHeap.extractMax();
        expect(binaryHeap.heap).toEqual([10, 5]);
    });
    it("should maintain the heap property after multiple insertions", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(20);
        binaryHeap.insert(5);
        binaryHeap.insert(30);
        expect(binaryHeap.heap).toEqual([30, 20, 5, 10]);
    });
    it("should maintain the heap property after multiple extractions", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(20);
        binaryHeap.insert(5);
        binaryHeap.insert(30);
        binaryHeap.extractMax();
        expect(binaryHeap.heap).toEqual([20, 10, 5]);
    });
    it("should handle duplicate values correctly", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(20);
        binaryHeap.insert(10);
        expect(binaryHeap.heap).toEqual([20, 10, 10]);
    });
    it("should handle negative values correctly", () => {
        binaryHeap.insert(-10);
        binaryHeap.insert(-20);
        binaryHeap.insert(-5);
        expect(binaryHeap.heap).toEqual([-5, -20, -10]);
    });
    it("should handle large numbers correctly", () => {
        binaryHeap.insert(1000000);
        binaryHeap.insert(2000000);
        binaryHeap.insert(500000);
        expect(binaryHeap.heap).toEqual([2000000, 1000000, 500000]);
    });
    it("should handle small numbers correctly", () => {
        binaryHeap.insert(0.1);
        binaryHeap.insert(0.2);
        binaryHeap.insert(0.05);
        expect(binaryHeap.heap).toEqual([0.2, 0.1, 0.05]);
    });
    it("should handle mixed positive and negative values correctly", () => {
        binaryHeap.insert(10);
        binaryHeap.insert(-20);
        binaryHeap.insert(5);
        expect(binaryHeap.heap).toEqual([10, -20, 5]);
    });
    it("should handle large number of elements correctly", () => {
        for (let i = 0; i < 1000; i++) {
            binaryHeap.insert(i);
        }
        expect(binaryHeap.size()).toBe(1000);
        expect(binaryHeap.peek()).toBe(999);
    });
    it("should handle large number of elements with random values correctly", () => {
        const randomValues = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
        randomValues.forEach(value => binaryHeap.insert(value));
        expect(binaryHeap.size()).toBe(1000);
        expect(binaryHeap.peek()).toBe(Math.max(...randomValues));
    });
    it("should handle large number of elements with negative values correctly", () => {
        for (let i = -1000; i < 0; i++) {
            binaryHeap.insert(i);
        }
        expect(binaryHeap.size()).toBe(1000);
        expect(binaryHeap.peek()).toBe(-1);
    });
    it("should handle large number of elements with mixed values correctly", () => {
        const mixedValues = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 2000) - 1000);
        mixedValues.forEach(value => binaryHeap.insert(value));
        expect(binaryHeap.size()).toBe(1000);
        expect(binaryHeap.peek()).toBe(Math.max(...mixedValues));
    });
});