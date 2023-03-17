import { CartContext } from "../../context/cart";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../../styleModules/cart.module.css";

function CartItem() {
    const { cart } = useContext(CartContext);

    function summeryCart(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
        }

        return total.toFixed(2);
    }

    const { addToCart } = useContext(CartContext);

    console.log(cart);

    return (
        <div className={styles.cart}>
            <h1>Your Cart</h1>
            <div className={styles.cart}>
                {cart.map((item) => {
                    return (
                        <div key={item.id} className={styles.item}>
                            <div>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <div>
                                <h3 className={styles.title}>{item.title} </h3>
                                
                                <p className={styles.price}>Price: {item.price}</p>
                          
                               
                            </div>
                           
                            <div className={styles.count}>
                                <button>-</button>
                                <input className={styles.input}
                                value={item.length}
                                
                                />
                                <button  onClick={() => {
                                 addToCart(item);
                                }}>+</button>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
            <div>
                <h2>Your Subtotal:</h2>
                <p>{summeryCart(cart)}kr</p>
            </div>
            <Link to="/checkout">
                <button className={styles.checkoutBtn}>Checkout</button>
            </Link>
        </div>
    )
}

export default CartItem;