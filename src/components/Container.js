import React from "react";
import "../styles/style.css";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        {
          id: 1,
          title: "brood",
        },
        {
          id: 2,
          title: "groente",
        },
        {
          id: 3,
          title: "koffie",
        },
        {
          id: 4,
          title: "melk",
        },
        {
          id: 5,
          title: "pasta",
        },
      ],
      shoppingListItems: [],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.handleClickAddNewItem = this.handleClickAddNewItem.bind(this);
  }

  handleClickGroceryItem(item) {
    this.setState((prevState) => {
      const updatedState = prevState.shoppingListItems;
      updatedState.push(item);
      return { shoppingListItems: updatedState };
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
