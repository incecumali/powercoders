package measurer;

public class DataSetv2 {
	// Measurer to measure the objects
	private Measurer m;
	// Current maximum
	private Object maximum;
	private int count;

	// Constructor receives the Measurer
	public DataSetv2(Measurer m) {
		this.m = m;
		this.count = 0;
	}

	// Add another object to the DataSet, check if it is a new maximum
	public void add(Object x) {
		if (this.count == 0 || this.m.measure(this.maximum) < this.m.measure(x)) {
			this.maximum = x;
		}
		this.count++;
	}

	// Return current Maximum
	public Object getMaximum() {
		return this.maximum;
	}
}
