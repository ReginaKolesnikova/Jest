async function Hello(name)
{
    return `Hello, ${name}`;
}

async function double(n)
{
    return n*2
}

async function average(nums) {
    const sum = nums.reduce((acc, n) => acc + n, 0);
    return sum / nums.length;
}

async function joinWords(words) {
    return words.join(' ');
}

async function repeatWord(word, times) {
    return word.repeat(times);
}
module.exports = { Hello, double, average, joinWords, repeatWord };