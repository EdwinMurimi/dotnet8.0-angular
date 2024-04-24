using System;
using System.Numerics;

public static class CalculateFactorial
{
    // Static method within a static class
    public static BigInteger Factorial(int number)
    {
        // Your existing factorial calculation logic
        BigInteger result = 1;
        for (int i = 2; i <= number; i++)
        {
            result *= i;
        }
        return result;
    }

    public static Task<BigInteger> FactorialAsync(int number)
    {
        return Task.Run(() => Factorial(number));
    }
}