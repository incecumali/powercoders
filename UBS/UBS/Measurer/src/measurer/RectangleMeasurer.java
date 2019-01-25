package measurer;

import javafx.scene.shape.Rectangle;

/*
 * RectangleMeasurer implements specific callback for Rectangles.
 * It implements the Measurer interface.
 */
public class RectangleMeasurer implements Measurer {

	@Override
	public double measure(Object obj) {
		Rectangle rect = (Rectangle) obj; // cast is necessary, because we get Objects
		return rect.getWidth() * rect.getHeight(); // area
	}
}