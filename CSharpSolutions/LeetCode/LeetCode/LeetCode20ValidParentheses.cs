using System.Collections.Generic;

namespace LeetCode;

public static class LeetCode20ValidParentheses {
    public static bool IsValid(string s) {
        if (s.Length % 2 != 0) return false;
        
        var stack = new Stack<char>();

        foreach (char c in s) {
            if (c is '(' or '[' or '{') {
                stack.Push(c);
            } else {
                if (stack.Count == 0) {
                    return false;
                }

                char first = stack.Pop();
                switch (c) {
                    case ')' when first != '(':
                    case ']' when first != '[':
                    case '}' when first != '{':
                        return false;
                }
            }
        }
        
        return stack.Count <= 0;
    }
}
