namespace Assignment10_Q1
{
    public static class Operations
    {
        public static void Sum(params int[] numbers)
        {
            int total = 0;
            foreach (int num in numbers)
                total += num;
            Console.WriteLine("Sum: " + total);
        }

        public static void Subtract(int a, int b)
        {
            Console.WriteLine("Subtract: " + (a - b));
        }

        public static void Product(params int[] numbers)
        {
            int result = 1;
            foreach (int num in numbers)
                result *= num;
            Console.WriteLine("Product: " + result);
        }

        public static void Min(params int[] numbers)
        {
            int min = numbers[0];
            foreach (int num in numbers)
                if (num < min)
                    min = num;
            Console.WriteLine("Min: " + min);
        }

        public static void Max(params int[] numbers)
        {
            int max = numbers[0];
            foreach (int num in numbers)
                if (num > max)
                    max = num;
            Console.WriteLine("Max: " + max);
        }

        public static void IsEven(int number)
        {
            if (number % 2 == 0)
                Console.WriteLine("Even");
            else
                Console.WriteLine("Not Even");
        }

        public static void IsOdd(int number)
        {
            if (number % 2 != 0)
                Console.WriteLine("Odd");
            else
                Console.WriteLine("Not Odd");
        }

        public static void IsPrime(int number)
        {
            if (number < 2)
            {
                Console.WriteLine("Not Prime");
                return;
            }

            bool prime = true;
            for (int i = 2; i <= Math.Sqrt(number); i++)
            {
                if (number % i == 0)
                {
                    prime = false;
                    break;
                }
            }

            if (prime)
                Console.WriteLine("Prime");
            else
                Console.WriteLine("Not Prime");
        }
    }

    public static class IntExtensions
    {
        public static void DisplayEvenInRange(this int start, int end)
        {
            Console.WriteLine("Even Numbers:");
            for (int i = start; i <= end; i++)
                if (i % 2 == 0)
                    Console.Write(i + " ");
            Console.WriteLine();
        }

        public static void DisplayOddInRange(this int start, int end)
        {
            Console.WriteLine("Odd Numbers:");
            for (int i = start; i <= end; i++)
                if (i % 2 != 0)
                    Console.Write(i + " ");
            Console.WriteLine();
        }

        public static void DisplayPrimeInRange(this int start, int end)
        {
            Console.WriteLine("Prime Numbers:");
            for (int i = start; i <= end; i++)
            {
                if (i < 2) continue;
                bool prime = true;
                for (int j = 2; j <= Math.Sqrt(i); j++)
                    if (i % j == 0)
                    {
                        prime = false;
                        break;
                    }
                if (prime) Console.Write(i + " ");
            }
            Console.WriteLine();
        }

        public static void DisplayTable(this int number)
        {
            for (int i = 1; i <= 10; i++)
                Console.WriteLine(number + " x " + i + " = " + (number * i));
        }

        public static void DisplayTables1To10InRange(this int start, int end)
        {
            for (int i = start; i <= end; i++)
            {
                Console.WriteLine("Table of " + i);
                i.DisplayTable();
            }
        }

        public static void ReverseNumber(this int number)
        {
            int reversed = 0;
            int n = number;
            while (n > 0)
            {
                reversed = reversed * 10 + n % 10;
                n = n / 10;
            }
            Console.WriteLine("Reversed: " + reversed);
        }

        public static void DisplayTablesInRange(int from, int to, int start, int end)
        {
            for (int i = start; i <= end; i++)
            {
                Console.WriteLine("Table of " + i + " from " + from + " to " + to);
                for (int j = from; j <= to; j++)
                    Console.WriteLine(i + " x " + j + " = " + (i * j));
            }
        }
    }

    public class Program
    {
        public static void Main()
        {
            Operations.Sum(1, 2, 3, 4);
            Operations.Subtract(10, 4);
            Operations.Product(2, 3, 4);
            Operations.Min(3, 5, 1, 9);
            Operations.Max(3, 5, 1, 9);
            Operations.IsEven(6);
            Operations.IsOdd(7);
            Operations.IsPrime(11);

            int a = 1;
            int b = 5;
            int c = 2;
            int d = 12345;

            a.DisplayEvenInRange(10);
            a.DisplayOddInRange(10);
            a.DisplayPrimeInRange(20);
            b.DisplayTable();
            c.DisplayTables1To10InRange(4);
            IntExtensions.DisplayTablesInRange(3, 5, 2, 3);
            d.ReverseNumber();
        }
    }
}

