class BinaryTreeNode<D> {
  data: D | undefined
  leftNode: BinaryTreeNode<D> | null
  rightNode: BinaryTreeNode<D> | null

  constructor(data?: D) {
    this.data = data
    this.leftNode = null
    this.rightNode = null
  }

  setData(data: D): void {
    this.data = data
  }

  setLeftNode(node: BinaryTreeNode<D>): void {
    this.leftNode = node
  }

  setRightNode(node: BinaryTreeNode<D>): void {
    this.rightNode = node
  }

  getData() {
    return this.data
  }

  getLeftNode() {
    return this.leftNode
  }

  getRightNode() {
    return this.rightNode
  }
}

export default BinaryTreeNode
