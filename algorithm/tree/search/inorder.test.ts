import { describe, test, expect } from '@jest/globals'
import BinaryTreeNode from '@data-structure/tree/BinaryTreeNode'

describe('트리', () => {
  test('중위 순회', () => {
    const root = new BinaryTreeNode(1)
    const tree1 = new BinaryTreeNode(2)
    const tree2 = new BinaryTreeNode(3)
    const tree3 = new BinaryTreeNode(4)
    const tree4 = new BinaryTreeNode(5)

    root.setLeftNode(tree1)
    root.setRightNode(tree2)

    tree1.setLeftNode(tree3)
    tree1.setRightNode(tree4)

    const res: unknown[] = []

    const solution = <D>(node: BinaryTreeNode<D> | null) => {
      if (node === null) {
        return
      }

      solution(node.getLeftNode())

      res.push(node.getData())

      solution(node.getRightNode())
    }

    solution(root)

    expect(res).toEqual([4, 2, 5, 1, 3])
  })
})
