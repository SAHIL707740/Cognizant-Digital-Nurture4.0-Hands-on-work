import java.util.*;

public class FinancialForecast {
    public static double forecast(double value, double rate, int years) {
        if (years == 0) return value;
        return forecast(value * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double initialValue = 10000;
        double annualRate = 0.10;

        System.out.println();
        System.out.print("Enter number of years to forecast: ");
        int numberOfYears = sc.nextInt();

        System.out.println();
        System.out.printf("Initial Value: %.2f\n", initialValue);
        double futureValue = forecast(initialValue, annualRate, numberOfYears);
        System.out.printf("Future value after %d years: %.2f\n", numberOfYears, futureValue);
        System.out.println();

        sc.close();
    }
}
