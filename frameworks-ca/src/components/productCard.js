import React from "react";
import { Link } from "react-router-dom"

function ProductCard ({product}){
    const {id, title, imageUrl, price, discountPrice, tags, reviews, description} = product
    return(
        <div className="Product--card">
            <h2 className="Product--header">{title}</h2>
            <img src={imageUrl} alt={title} className="Product--img"/>
            <div>
                
                <p className="Product--price">Price: {price === discountPrice? `kr ${price}`: `kr ${discountPrice}, save kr ${price - discountPrice}`}</p>
                <Link to={`product/${id}`} className="Product--link">View Product</Link>

            </div>
        </div>
    )
    }

    export default ProductCard;