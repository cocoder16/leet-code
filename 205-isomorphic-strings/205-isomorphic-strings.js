const isIsomorphic = (s, t) => {
    const pair = {};
    const tCache = [];
    
    return s.split("").every((sC, index) => {
        if(pair[sC]) {
            return pair[sC] === t[index];
        } 
        
        if (!pair[sC] && !tCache.includes(t[index])) {
            pair[sC] = t[index];
            tCache.push(t[index]);
            return true;
        }
        
        if (!pair[sC] && tCache.includes(t[index])) {
            return false
        }
    })
};