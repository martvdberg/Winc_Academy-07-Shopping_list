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
    <section className="groceryList">
      <h2 className="listTitle">Boodschappen</h2>
      <Inputfield
        handleClickAddNewItem={props.handleClickAddNewItem}
        handleKeyDown={props.handleKeyDown}
      />
      <List items={groceryItems} />
    </section>
  );
}

export default GroceryList;
