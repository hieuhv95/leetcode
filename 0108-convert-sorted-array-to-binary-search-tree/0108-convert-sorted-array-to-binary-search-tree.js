/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function buildNewTree(startNode, endNode) {
        if (startNode > endNode) {
            return null;
        }
        // indext nút giữa
        const midNode = Math.floor((startNode + endNode) / 2);
        // lấy các nút trong tree mới
        const newTree = new TreeNode(nums[midNode]);
        newTree.left = buildNewTree(startNode, midNode - 1);
        newTree.right = buildNewTree(midNode + 1, endNode,)
        return newTree;
    }
    return buildNewTree(0, nums.length - 1)
};