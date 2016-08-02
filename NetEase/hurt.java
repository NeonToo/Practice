import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextInt()) {
            Integer monsterCount = scanner.nextInt();
            Integer initialPower = scanner.nextInt();

            Integer currentPower = initialPower;
            for (int i = 0; i < monsterCount; i++) {
                Integer defensivePower = scanner.nextInt();
                if (defensivePower <= currentPower) {
                    currentPower += defensivePower;
                } else {
                    currentPower += Main.gcd(currentPower, defensivePower);
                }
            }
            System.out.println(currentPower);
        }
        scanner.close();
    }

    private static Integer gcd(Integer m, Integer n) {
        if (n == 0) {
           return m;
        }
        else {
            return Main.gcd(n,m%n);
        }
    }
}