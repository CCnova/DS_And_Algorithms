class TreeNode<T> {
  public value: T;
  public left?: TreeNode<T>;
  public right?: TreeNode<T>;

  constructor(value: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function searchBinaryTree<T>(
  value: T,
  node?: TreeNode<T>
): TreeNode<T> | undefined {
  if (node === undefined || node.value === value) return node;

  if (node.value > value) return searchBinaryTree(value, node.left);
  if (node.value < value) return searchBinaryTree(value, node.right);
}

function insertBinaryTree<T>(value: T, node: TreeNode<T>) {
  if (value < node.value) {
    if (!node.left) {
      node.left = new TreeNode<T>(value);
    } else {
      insertBinaryTree(value, node.left);
    }
  } else if (value > node.value) {
    if (!node.right) {
      node.right = new TreeNode<T>(value);
    } else {
      insertBinaryTree(value, node.right);
    }
  }
}

const left = new TreeNode<number>(
  15,
  new TreeNode<number>(5),
  new TreeNode<number>(16)
);
const right = new TreeNode<number>(35, undefined, undefined);
const root = new TreeNode<number>(17, left, right);

console.log(searchBinaryTree(16, root));

insertBinaryTree(43, root);

console.log(searchBinaryTree(43, root));
