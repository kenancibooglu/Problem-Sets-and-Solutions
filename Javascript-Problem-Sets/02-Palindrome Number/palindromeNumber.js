function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    const str = x.toString();
    const tersString = str.split('').reverse().join('');
    return str === tersString;
}