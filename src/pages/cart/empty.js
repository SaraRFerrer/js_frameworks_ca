import { Link } from "react-router-dom";
import styles from "../../styleModules/emptyCart.module.css";

function EmptyCart() {
  return (
    <div>
      <h1>Your cart is empty</h1>
      <div className={styles.container}>
        <Link to={"/"}>
          <button className={styles.emptyBtn}>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
