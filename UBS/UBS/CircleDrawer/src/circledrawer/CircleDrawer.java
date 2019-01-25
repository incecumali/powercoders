package circledrawer;

import java.util.Random;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class CircleDrawer extends Application {
	@Override
	public void start(Stage primaryStage) throws Exception {

		primaryStage.setTitle("Circle Drawer");
		final BorderPane border = new BorderPane();
		final StackPane stack = new StackPane();

		final HBox hboxtop = new HBox();
		final VBox vboxleft = new VBox();
		Scene scene = new Scene(border, 500, 500);
		Text title = new Text("this is a circle drawer");
		title.setFont(Font.font("Arial", FontWeight.BOLD, 14));
		title.setFill(Color.WHITE);

		hboxtop.setPadding(new Insets(11, 11, 11, 10));
		hboxtop.setSpacing(12);
		hboxtop.setStyle("-fx-background-color: #336699;");
		hboxtop.getChildren().addAll(title);

		vboxleft.setPadding(new Insets(10));
		vboxleft.setSpacing(8);
		TextField color1 = new TextField();
		TextField color2 = new TextField();
		TextField color3 = new TextField();

		color1.setText("0");
		color2.setText("0");
		color3.setText("225");

		Button colorButton = new Button("Draw");
		Button randomButton = new Button("Random");

		vboxleft.getChildren().addAll(color1, color2, color3, colorButton, randomButton);
		border.setLeft(vboxleft);
		border.setCenter(stack);
		border.setTop(hboxtop);

		randomButton.setOnAction(new EventHandler<ActionEvent>() {

			@Override
			public void handle(ActionEvent event) {

				Random rand = new Random();

				int col1 = rand.nextInt(225);
				int col2 = rand.nextInt(225);
				int col3 = rand.nextInt(225);

				color1.setText(col1 + "");
				color2.setText(col2 + "");
				color3.setText(col3 + "");

				Circle c1 = new Circle(100, Color.rgb(col1, col2, col3));

				stack.getChildren().addAll(c1);
			}

		});

		colorButton.setOnAction(new EventHandler<ActionEvent>() {

			@Override
			public void handle(ActionEvent event) {

				try {
					int col1 = Integer.parseInt(color1.getText());
					int col2 = Integer.parseInt(color2.getText());

					int col3 = Integer.parseInt(color3.getText());

					if ((col1 >= 0 && col1 <= 225) && (col2 >= 0 && col2 <= 225) && (col3 >= 0 && col3 <= 225)) {

						Circle c1 = new Circle(100, Color.rgb(col1, col2, col3));
						stack.getChildren().add(c1);

					}
				} catch (NumberFormatException ex) {
					System.out.println(ex.getMessage());
					System.exit(1);
				}

			}

		});

		primaryStage.setScene(scene);
		primaryStage.show();

	}

	public static void main(String[] args) {

		Application.launch(args);
	}

}
