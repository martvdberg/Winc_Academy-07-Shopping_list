import React from "react";

function ListItem(props) {
  // if item dos not have a count property render as grocery item otherwise render as a shoppingcart item
  if (!props.item.count) {
    return (
      <li
        key={props.item.id}
        onClick={() => props.handleClick(props.item)}
        className="listItem"
      >
        {props.item.title}
      </li>
    );
  } else {
    return (
      <li className="listItem" key={props.item.id}>
        <span>{props.item.title} </span>
        <span>Hoeveelheid: {props.item.count}</span>
      </li>
    );
  }
}

export default ListItem;
