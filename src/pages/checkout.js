import { Link } from "react-router-dom";
import styles from "../styleModules/checkout.module.css"


function Checkout() {
    return (
        <div className={styles.checkout}>
            <h1 className={styles.title}>Your order was successful!</h1>
            <img src="./check.png" alt="" className={styles.check} />
            <p>Your order will be shipped within 5-10 business days. Contact us if you have any questions.</p>
            <div>
                <Link to={"/"}>
                    <button className={styles.shoppingBtn}>Continue Shopping</button>
                </Link>
            </div>

        </div>
    )
}

export default Checkout;