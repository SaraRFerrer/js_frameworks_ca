import { Link } from "react-router-dom";

function EmptyCart() {
    return (
        <div>
            <h1>Your cart is empty</h1>
            <div>
            <Link to={"/"}>
                <button>Continue Shopping</button>
            </Link>
            </div>
        </div>
    )
}

export default EmptyCart;