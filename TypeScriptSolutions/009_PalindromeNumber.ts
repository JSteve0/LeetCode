function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    // Solve without integer to string conversion because that is too easy

    let numberOfDigits = 0;
    let xCopy = x;
    while (xCopy > 0) {
        numberOfDigits++;
        xCopy = Math.floor(xCopy / 10);
    }

    for (let i = 0; i < Math.floor(numberOfDigits / 2); i++) {
        const leftDigit = Math.floor(x / Math.pow(10, numberOfDigits - i - 1) % 10);
        const rightDigit = Math.floor(x % Math.pow(10, i + 1) / Math.pow(10, i));

        if (leftDigit !== rightDigit) {
            return false;
        }

        //break;
    }

    return true;
}