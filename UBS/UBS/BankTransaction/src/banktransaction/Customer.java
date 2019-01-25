package banktransaction;

public class Customer {
	private BankAccount ba;

	public Customer(String customerName, String customerAddres) {

	}

	public int createBankAccount(String bankAccountName, double initialBalance) {

		ba = new BankAccount(bankAccountName, initialBalance);

		return ba.getId();

	}

	public BankAccount getBankAccount() {

		return this.ba;

	}
	

}
