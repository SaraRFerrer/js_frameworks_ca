import React from "react";
import { Link } from "react-router-dom"

function SingleProductCard({product}) {
    const { id, title, description, price, discountedPrice, imageUrl, rating, reviews } = product;
    

    return (
        <main>
            <div>
                <div>
                    <img src={imageUrl} alt={title} />
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Price: {price === discountedPrice? `kr ${price}`: `kr ${discountedPrice}, save kr ${price - discountedPrice}`}</p>
                </div>
                <div>
                    {rating ? <p>Rating: {rating}</p> : ""}
                </div>
                <section>
                    <h3>Reviews:</h3>
                    {reviews ? <div>
                        {reviews.map((review) => {
                            return (
                                <div>
                                    <p>{review.username}</p>
                                    <p>Rating: {review.rating}</p>
                                    <p>{review.description}</p>
                                </div>
                            );
                            })}
                        </div> : ""}
                </section>
                <div>
                    <Link to={`/cart/${id}`}>Add to cart</Link>
                </div>
            </div>
        </main>
            
    )

}
export default SingleProductCard;