import React from "react";
import { Link } from "react-router-dom"
import styles from "../styleModules/grid.module.css";

function ProductCard ({product}){
    const {id, title, imageUrl, price, discountedPrice } = product
    return(
        <div className={styles.Productcard}>
            <h2 className={styles.Productheader}>{title}</h2>
            <img src={imageUrl} alt={title} className={styles.Productimg}/>
            <div>
                
                <p className={styles.Productprice}>Price: {price === discountedPrice? `kr ${price}`: `kr ${discountedPrice}, save kr ${price - discountedPrice}`}</p>
                <Link to={`product/${id}`} className={styles.Productlink}>View Product</Link>

            </div>
        </div>
    )
    }

    export default ProductCard;