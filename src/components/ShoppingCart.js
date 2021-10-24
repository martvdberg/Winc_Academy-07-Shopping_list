import React from "react";
import List from "./List";
import ListItem from "./ListItem";

function ShoppingCart(props) {
  const shoppingCartItems = props.props.map((item) => {
    return <ListItem key={item.id} item={item} />;
  });

  return (
    <section className="shoppingCart">
      <h2 className="listTitle">Winkelmand</h2>
      <button onClick={props.emptyCart}>Leeg de winkelmand</button>
      <List items={shoppingCartItems} />
    </section>
  );
}

export default ShoppingCart;
