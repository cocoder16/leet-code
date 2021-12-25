function inorderTraversal(root) {
    const result = [];
    
    if (root === []) {
        return [];
    }
    
    function inOrderTraversal(node) {
        if (node === null) {
            return;
        }
        
        inOrderTraversal(node.left);
        result.push(node.val);
        inOrderTraversal(node.right);
    };
    
    inOrderTraversal(root);
    
    return result;
};