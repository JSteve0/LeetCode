import TreeNode from "./Types/TreeNode";

function inorderTraversal(root: TreeNode | null): number[] {
    const answer: number[] = [];

    function helper (node: TreeNode | null = root) {
        if (node) {
            helper(node.left);
            answer.push(node.val);
            helper(node.right)
        }
    }

    helper();
    return answer;
}