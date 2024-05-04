import TreeNode from "./Types/TreeNode";

function maxDepth(root: TreeNode | null): number {
    // use breadth first
    let queue = [];
    let index = 0;
    let maxD = -1;

    function isLeaf(node: TreeNode): boolean {
        return (node.left === null && node.right === null);
    }

    if (root === null) return 0

    queue.push({node: root, depth: 1});
    while (index != queue.length) {
        const currNode = queue[index].node;
        const currDepth = queue[index].depth;
        if (isLeaf(currNode)) maxD = Math.max(maxD, currDepth);

        if (currNode.left !== null) queue.push({node: currNode.left, depth: currDepth + 1});
        if (currNode.right !== null) queue.push({node: currNode.right, depth: currDepth + 1});

        index++;
    }

    return maxD;
}

function maxDepthSolution2(root: TreeNode | null): number {
    if (root === null) return 0;

    function OptimizedMaxDepth (node: TreeNode | null, depth: number): number {
        if (node === null) return depth;
        return Math.max(OptimizedMaxDepth(node.left, depth + 1), OptimizedMaxDepth(node.right, depth + 1));
    }

    return OptimizedMaxDepth(root, 0);
}