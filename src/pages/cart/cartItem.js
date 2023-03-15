import { CartContext } from "../../context/cart";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

function CartItem() {
    const { cart } = useContext(CartContext);

    function summeryCart(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
        }

        return total.toFixed(2);
    }

    console.log(cart);

    return (
        <div>
            <h1>Your Cart</h1>
            <div>
                {cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>{item.id}</p>
                            </div>
                            <div>
                                <button>-</button>
                                <p>0</p>
                                <button>+</button>
                            </div>
                            <div>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <h2>Your Subtotal:</h2>
                <p>{summeryCart(cart)}kr</p>
            </div>
            <Link to={"/checkout"}>
                <button>Checkout</button>
            </Link>
        </div>
    )
}

export default CartItem;