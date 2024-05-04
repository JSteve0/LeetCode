function minDepth(root: TreeNode | null): number {
    // use breadth first
    let queue = [];
    let index = 0;

    function isLeaf(node: TreeNode): boolean {
        return (node.left === null && node.right === null);
    }

    if (root === null) return 0

    queue.push({node: root, depth: 1});
    while (true) {
        const currNode = queue[index].node;
        const currDepth = queue[index].depth;
        if (isLeaf(currNode)) return currDepth;

        if (currNode.left !== null) queue.push({node: currNode.left, depth: currDepth + 1});
        if (currNode.right !== null) queue.push({node: currNode.right, depth: currDepth + 1});

        index++;
    }

}