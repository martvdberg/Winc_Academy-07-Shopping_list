import React from "react";

function ListItem(props) {
  if (!props.item.count) {
    return (
      <li key={props.item.id} onClick={() => props.handleClick(props.item)}>
        {props.item.title}
      </li>
    );
  } else {
    return (
      <li key={props.item.id}>
        <span className="cartItem">{props.item.title} </span>
        <span className="cartItem__counter">amount: {props.item.count}</span>
      </li>
    );
  }
}

export default ListItem;
