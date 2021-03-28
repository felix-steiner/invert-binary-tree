class TreeNode {
  constructor(private value: number, public leftChild?: TreeNode, public rightChild?: TreeNode) { }
}

const leaf1 = new TreeNode(1);
const leaf2 = new TreeNode(3);
const leaf3 = new TreeNode(6);
const leaf4 = new TreeNode(7);
const leftNode = new TreeNode(2, leaf1, leaf2);
const rightNode = new TreeNode(5, leaf3, leaf4);
const root = new TreeNode(4, leftNode, rightNode);

console.log(root);
reverse(root);
console.log(root);

function reverse(treeNode: TreeNode): void {
  if (treeNode == null) return;
  [treeNode.leftChild, treeNode.rightChild] = [treeNode.rightChild, treeNode.leftChild];
  reverse(treeNode.leftChild);
  reverse(treeNode.rightChild);
}
