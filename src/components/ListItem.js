import React from "react";

function ListItem(props) {
  // console.log(props);
  // if condition should be !counter instead of props.handleClick
  if (props.handleClick) {
    return (
      <li key={props.item.id} onClick={() => props.handleClick(props.item)}>
        {props.item.title}
      </li>
    );
  } else {
    return <li key={props.item.id}>{props.item.title}</li>;
  }
}

export default ListItem;
