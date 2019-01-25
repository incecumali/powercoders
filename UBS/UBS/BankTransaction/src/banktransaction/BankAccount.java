package banktransaction;

import java.util.Random;

public class BankAccount {
	private double balance;

	public BankAccount(String bankAccountName, double balance) {
		this.balance = balance;

	}

	public void putMoney(double amount) {
		balance = this.balance + amount;

	}

	public void getMoney(double amount) {
		balance = this.balance - amount;
	}

	public int getId() {

		Random ran = new Random();
		int maxInt = Integer.MAX_VALUE;
		int id = ran.nextInt(maxInt) + 1;
		return id;

	}

	public double getBalance() {
		return balance;
	}

}
