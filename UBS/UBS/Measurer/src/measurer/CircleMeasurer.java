package measurer;

import javafx.scene.shape.Circle;

public class CircleMeasurer implements Measurer {
	@Override
	public double measure(Object obj) {
		Circle circ = (Circle) obj; // cast is necessary
		return circ.getRadius() * circ.getRadius() * Math.PI; // area
	}
}
