const lengthOfLongestSubstring = s => {
    let result = "";
    let tempResult = "";
    
    for (let i = 0; i < s.length; i++) {
        const foundIndex = tempResult.indexOf(s[i]);
        const existString = foundIndex !== -1;
        
        if (existString) {
            const shouldChange = result.length < tempResult.length;
        
            if (shouldChange) {
                result = tempResult;
            }
            
            tempResult = tempResult.substring(foundIndex + 1, i + 1) + s[i];
        } else {
            tempResult += s[i];
        }
    }
    
    return Math.max(result.length, tempResult.length);
};