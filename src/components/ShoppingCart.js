import React from "react";
import List from "./List";
import ListItem from "./ListItem";

function ShoppingCart(props) {
  const shoppingCartItems = props.props.map((item) => {
    return <ListItem key={item.id} item={item} />;
  });

  return (
    <div className="shopping-cart">
      <h2>Shopping cart</h2>
      <button onClick={props.emptyCart}>Clear list</button>
      <List items={shoppingCartItems} />
    </div>
  );
}

export default ShoppingCart;
