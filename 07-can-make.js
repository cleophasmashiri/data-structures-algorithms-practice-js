const canMake = (sentence, wordDict) => {
    if (sentence.length === 0) return true;
    for (let w of wordDict) {
        if (sentence.indexOf(w)===0) {
            let rem = sentence.slice(w.length);
            return canMake(rem, wordDict);
        }
    }
    return false;
};


console.log(canMake('applepie', ['apple', 'pear', 'pear', 'pie']));