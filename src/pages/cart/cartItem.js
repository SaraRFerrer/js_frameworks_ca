import { CartContext } from "../../context/cart";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styleModules/cart.module.css";

function CartItem() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  function summeryCart(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }

    return total.toFixed(2);
  }

  const handleRemoveItem = (itemId) => {
    console.log("removing item with id:", itemId);
    removeFromCart(itemId);
  };

  console.log(cart);

  return (
    <div className={styles.cart}>
      <h1 className={styles.heading}>Your Cart</h1>
      <div className={styles.cart}>
        {cart.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <div>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={styles.itemImg}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title} </h3>
                <p className={styles.price}>Price: {item.price}</p>
              </div>
              <button
                className={styles.trashBtn}
                onClick={() => handleRemoveItem(item.id)}
              >
                <img src="/trash.png" alt="" />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Your Subtotal:</h2>
        <p>{summeryCart(cart)}kr</p>
      </div>
      <Link to="/checkout">
        <button
          className={styles.checkoutBtn}
          onClick={() => {
            clearCart(cart);
          }}
        >
          Checkout
        </button>
      </Link>
    </div>
  );
}

export default CartItem;
