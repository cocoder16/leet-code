const matchWord = (word, pattern) => {
    const convertMap = {};
    const patternLetters = [];
    
    return word.split("").every((char, index) => {
        const patternLetter = pattern[index];
        
        if (convertMap[char]) {
            return convertMap[char] === patternLetter;
        }
        
        if (!convertMap[char] && patternLetters.includes(patternLetter)) {
            return false;
        }
        
        if (!convertMap[char] && !patternLetters.includes(patternLetter)) {
            convertMap[char] = patternLetter;
            patternLetters.push(patternLetter);
            return true;
        }
    })
    
};

const findAndReplacePattern = (words, pattern) => words.filter(word => matchWord(word, pattern));