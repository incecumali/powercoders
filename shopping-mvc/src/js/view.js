/*Update UI with the shopping list contents
* */
/** HTML View for the ShoppingList. */
class View {
    /**
     * @param model {!Model} App data model
     * @param controller {!Controller} App controller
     */
    constructor(model, controller) {
        console.log('View ready!');

        /** @private {!Model} App data model */
        this.model_ = model;

        /** @private {!Controller} App controller */
        this.controller_ = controller;

        this.shoppingList_ = document.querySelector('ul');

        this.inputBox_=document.getElementById('item');

        this.quantityBox_=document.getElementById('quantity');
        this.addItemButton_= document.getElementById('add');
        this.clearListButton_=document.getElementById('clear');
        this.clearListButton_.addEventListener('click',()=>this.controller_);

        this.clearListButton_.addEventListener('click', ()=>this.controller_.clearList());
        this.inputBox_.addEventListener('keyup', (event)=>this.onKeyup(event));
        this.addItemButton_.addEventListener('click', ()=>this.addItem());

    }
    addItem(){
        const trimmedValue=this.inputBox_.value.trim();
        const trimmedQuantity=this.quantityBox_.value.trim();

        this.controller_.addItem(trimmedValue, trimmedQuantity);
    }

    update(){
        while( this.shoppingList_.firstChild){
            this.shoppingList_.firstChild.remove();
        }

        for( let i=0; i<this.model_.items.length; i++){
            const item =this.model_.items[i];
            const listItem=item.toListItem();
            this.shoppingList_.appendChild(listItem);
        }

        this.addItemButton_.disabled =true;
        this.inputBox_.value='';
        this.quantityBox_.value='';
        this.inputBox_.focus();



    }

    onKeyup(event){
        const trimmedValue=this.inputBox_.value.trim();
        this.addItemButton_.disabled=trimmedValue==="";
        if( trimmedValue===''){
            return }
        if(event.key !=='Enter'){
            return ;

        }
        this.addItem();
    }
}

