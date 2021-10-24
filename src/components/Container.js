import React from "react";
import "../styles/style.css";

import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [],
      shoppingListItems: [],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleClickAddNewItem = this.handleClickAddNewItem.bind(this);
  }

  // add an item to the shoppingcart when clicked
  handleClickGroceryItem(item) {
    this.setState((prevState) => {
      let updatedState = prevState.shoppingListItems;
      if (
        !updatedState.some((itemInState) => itemInState.title === item.title)
      ) {
        updatedState.push({
          id: item.id,
          title: item.title,
          count: 1,
        });
      } else {
        updatedState = this.addAmountToItem(item, updatedState);
      }
      return { shoppingListItems: updatedState };
    });
  }

  // If an item is already in the shoppingcart increase amount with 1
  addAmountToItem(item, prevState) {
    const itemIndex = prevState.findIndex(
      (itemInState) => itemInState.title === item.title
    );
    prevState[itemIndex].count += 1;
    return prevState;
  }

  // Add new item to the shoppinglist
  handleClickAddNewItem(event, inputValue) {
    event.preventDefault();

    if (inputValue !== "") {
      this.setState((prevState) => {
        const updatedState = prevState.groceryItems;
        updatedState.push({
          id: updatedState.length + 1,
          title: inputValue,
        });
        return {
          groceryItems: updatedState,
        };
      });
    }
  }

  // Empty the cart when clicked
  emptyCart() {
    this.setState({ shoppingListItems: [] });
  }

  render() {
    return (
      <div className="container">
        <GroceryList
          props={this.state.groceryItems}
          handleClick={this.handleClickGroceryItem}
          handleClickAddNewItem={this.handleClickAddNewItem}
          handleKeyDown={this.handleKeyDown}
        />
        <ShoppingCart
          props={this.state.shoppingListItems}
          emptyCart={this.emptyCart}
        />
      </div>
    );
  }
}

export default Container;
