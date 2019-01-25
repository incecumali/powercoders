package banktransaction;

import java.util.Scanner;

public class BankAccountCLI {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner scan = new Scanner(System.in);
		System.out.println();
		System.out.println("Create a new Account ");
		System.out.println("Write your name: ");
		String customerName = scan.nextLine();
		System.out.println("Write your address: ");
		String customerAddress = scan.nextLine();
		Customer c1 = new Customer(customerName, customerAddress);

		System.out.println("write account type? ");
		String bankAccountName = scan.nextLine();
		System.out.println("initial balance:");
		double initialBalance = scan.nextDouble();
		c1.createBankAccount(bankAccountName, initialBalance);

		System.out.println("your account is created with id " + c1.createBankAccount(bankAccountName, initialBalance));
		Scanner scan2 = new Scanner(System.in);

		while (true) {
			System.out.println("select an  option: balance get put exit");
			String input = scan2.nextLine();
			if (!(input.equals("get") || input.equals("put") || input.equals("exit") || input.equals("balance"))) {
				System.err.println("invalid input, you should give : put  get exit , Got: " + input);
				System.exit(1);
			}

			if (input.equals("balance")) {
				System.out.println("your balance is : " + c1.getBankAccount().getBalance());
			} else if (input.equals("put")) {
				System.out.println("amount to put");
				double monPut = scan.nextDouble();
				c1.getBankAccount().putMoney(monPut);
				System.out.println("your balance is : " + (c1.getBankAccount().getBalance()));
			} else if (input.equals("get")) {
				System.out.println("amount to get");
				double monGet = scan.nextDouble();
				c1.getBankAccount().getMoney(monGet);
				System.out.println("your balance is : " + (c1.getBankAccount().getBalance()));
			} else if (input.equals("exit")) {
				System.out.println("you exit from program");

				System.exit(0);
			}

			else {

				System.out.println("input error");
				break;
			}

		}
		scan.close();
		scan2.close();

	}

}
