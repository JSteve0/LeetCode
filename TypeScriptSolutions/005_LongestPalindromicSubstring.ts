function longestPalindrome(s: string): string {
    // use sliding door but start big
    let width = s.length;

    function isPalindrome(s: string): boolean {
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            if (s[s.length - i] !== s[i]) return false;
        }

        return true;
    }

    while (width > 0) {
        for (let i = 0; i <= s.length - width; i++) {
            const currSub = s.substring(i, i + width);
            console.log(width, currSub);
            if (isPalindrome(currSub)) return currSub
        }

        width--
    }

    return "";
}