import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import Inputfield from "./Inputfield";

function GroceryList(props) {
  const groceryItems = props.props.map((item) => {
    return (
      <ListItem
        key={item.id + item.title}
        item={item}
        handleClick={props.handleClick}
      />
    );
  });
  return (
    <div className="grocery-list">
      <h2>Groceries</h2>
      <Inputfield handleClickAddNewItem={props.handleClickAddNewItem} />
      <List items={groceryItems} />
    </div>
  );
}

export default GroceryList;
