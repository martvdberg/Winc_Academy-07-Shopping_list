import React from "react";
import "../styles/style.css";

import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [],
      shoppingListItems: [],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleClickAddNewItem = this.handleClickAddNewItem.bind(this);
  }

  handleClickGroceryItem(item) {
    this.setState((prevState) => {
      const newState = prevState.shoppingListItems;
      const itemIndex = newState.findIndex((x) => {
        return x.title === item.title;
      });

      if (itemIndex !== -1) {
        newState[itemIndex].count += 1;
      } else {
        newState.push({
          id: item.id,
          title: item.title,
          count: 1,
        });
      }
      return { shoppingListItems: newState };
    });
  }

  handleClickAddNewItem(inputValue) {
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
