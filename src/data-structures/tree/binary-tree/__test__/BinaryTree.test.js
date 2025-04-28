const Jasmine = require("jasmine");
const jasmine = new Jasmine();
jasmine.loadConfigFile("spec/support/jasmine.json");
jasmine.execute();

const { BinaryTree, BinaryTreeNode } = require("../BinaryTree");

describe('BinaryTree', () => {
    let binaryTree;
  
    beforeEach(() => {
      /*
       * Create a binary tree with the following structure:
       *          1
       *        /   \
       *       2     3
       *      / \   / \
       *     4   5 6   7
       */
      const node4 = new BinaryTreeNode(4);
      const node5 = new BinaryTreeNode(5);
      const node6 = new BinaryTreeNode(6);
      const node7 = new BinaryTreeNode(7);
      const node2 = new BinaryTreeNode(2, node4, node5);
      const node3 = new BinaryTreeNode(3, node6, node7);
      const node1 = new BinaryTreeNode(1, node2, node3);
      binaryTree = new BinaryTree(node1);
    });
  
    describe('#preorder', () => {
      it('should yield values in the correct order', () => {
        const values = Array.from(binaryTree.preorder());
        expect(values).toEqual([1, 2, 4, 5, 3, 6, 7]);
      });
    });
  
    describe('#inorder', () => {
      it('should yield values in the correct order', () => {
        const values = Array.from(binaryTree.inorder());
        expect(values).toEqual([4, 2, 5, 1, 6, 3, 7]);
      });
    });
  
    describe('#postorder', () => {
      it('should yield values in the correct order', () => {
        const values = Array.from(binaryTree.postorder());
        expect(values).toEqual([4, 5, 2, 6, 7, 3, 1]);
      });
    });
  });  