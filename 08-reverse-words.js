const reverse = (sentence) => {
    // 'Hello this World' => 'World this Hello'
    const sentenceArr = [...sentence];
    const len = sentenceArr.length;
    const mid = Math.floor((len / 2));
    for (let i = 0; i < mid; i++) {
        let temp = sentenceArr[i];
        sentenceArr[i] = sentenceArr[len - i - 1];
        sentenceArr[len - i - 1] = temp;
    }
    let start = 0;
    for (let i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i] === ' ') {
            reverseWord(sentenceArr, start, i-1);
            start = i+1;
            //console.log(start+1);
        } else if (i === len-1) {
            console.log(start, len-1);
            reverseWord(sentenceArr, start, len-1);
        }

    }
    return sentenceArr.join('');
};
const reverseWord = (sentenceArr, start, end) => {
    let low = start;
    let high = end;
    //console.log(low, high);
    while (low < high) {
        let temp = sentenceArr[low];
        sentenceArr[low] = sentenceArr[high];
        sentenceArr[high] = temp;
        high--;
        low++;
    }
}
console.log(reverse('Hello this World'));
