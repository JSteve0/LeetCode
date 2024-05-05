namespace LeetCode;

public static class Program {
    public static void Main() {
        bool state = LeetCode20ValidParentheses.IsValid("([)]");
        
        Console.WriteLine("Parentheses are valid: " + state);
    }
}
