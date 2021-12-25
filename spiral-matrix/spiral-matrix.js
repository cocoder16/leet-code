const spiralOrder = matrix => {
    const output = [];
    
    const checkEmpty = () => matrix.length === 0 || matrix[0].length === 0;
    
    while (true) {
        output.push(...matrix.shift());
        
        if (checkEmpty()) {
            break;
        }
        
        matrix.forEach(row => {
            output.push(row.pop());
        });
        
        if (checkEmpty()) {
            break;
        }
        
        output.push(...matrix.pop().reverse());
        
        if (checkEmpty()) {
            break;
        }
        
        matrix.reverse().forEach(row => {
            output.push(row.shift());
        });
        
        if (checkEmpty()) {
            break;
        }
        
        matrix.reverse();
    }
    
    return output;
};