import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
    	Main main = new Main();
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextInt()) {
        	int dayN = scanner.nextInt();
        	System.out.println(main.getPrice(dayN));
        }
        scanner.close();
    }

	public int getPrice(int dayN) {
		int price, downDays;

		downDays = (int) (Math.sqrt(2 * dayN + 0.25) - 1.5);
		price = dayN - 2 * downDays;

		return price;
	}
}