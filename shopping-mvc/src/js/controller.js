/**
 * Controller for the shopping list application.
 */
class Controller {
    constructor() {
        console.log('Controller running!');

        /** @private {!Model} Application model */
        this.model_ = new Model(this);
    }

    addItem(name , quantity){
        const item= new ShoppingListItem(name, quantity);
        this.model_.append(item);

    }

    deleteItem(i){
        this.model_.delete(i);
    }

    clearList(){
        /*
        * clear the shopping list*/
        this.model_.clear();
    }
}
