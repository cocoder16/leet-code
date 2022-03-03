const recoverFromPreorder = traversal => {
    const firstIndex = traversal.indexOf("-");
    
    if (firstIndex === -1) {
        return new TreeNode(Number(traversal));
    }
    
    const root = new TreeNode(Number(traversal.substr(0, firstIndex)));
    const traversalLength = traversal.length;
    let parents = [];
    let depthCount = 0;
    let prevDepthCount = 0;
    let stringValue = "";
    
    parents.push(root);
    
    for (let index = firstIndex; index < traversalLength; index++) {
        const char = traversal[index];
        
        if (char === "-") {
            depthCount += 1;
            continue;
        }
        
        stringValue += char;
        const nextValue = traversal[index + 1];
        const needMoreChar = nextValue !== "-" && index !== traversalLength - 1;
        
        if (needMoreChar) {
            continue;
        }
        
        const value = Number(stringValue);
        const diff = prevDepthCount - depthCount;
        const node = new TreeNode(Number(value));

        if (diff < 0) {
            parents[parents.length - 1].left = node;
            parents.push(node);
        }
        
        if (diff === 0) {
            parents[parents.length - 2].right = node;
            parents.pop();
            parents.push(node);
        }
        
        if (diff > 0) {
            const parent = parents[depthCount - 1];
            parent.right = node;
            parents = [...parents.slice(0, depthCount), node];
        }
        
        prevDepthCount = depthCount;
        depthCount = 0;
        stringValue = "";
    }
    
    return root;
};