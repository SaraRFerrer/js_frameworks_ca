import React, {useContext } from "react";
import { CartContext } from "../../components/cart";
import CartItem from "./cartItem";
import EmptyCart from "./empty";

function Cart() {
  const { cart } = useContext(CartContext);

    return <>{cart.length === 0 ? <EmptyCart /> : <CartItem />}</>
  }

export default Cart;