import React from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../components/singleProductCard";
import ApiHook from "../hooks/apiHook";
import { Link } from "react-router-dom";

function Product ({ product, isLoading, isError}) {
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (isError) {
      return <div>An error has accured</div>
    }
    return (
      <div>
       
          <SingleProductCard key={product.id} product={product} />
       
      </div>
    )
  }

function ProductPage() {
    const params = useParams();
    let url = `https://api.noroff.dev/api/v1/online-shop/`;
    const { data, isLoading, isError, id, price, discountedPrice } = ApiHook(url + params.id );
    if(isLoading) {
        return <div>Loading...</div>
      }
    
    if (isError) {
      return <div>An error has accured</div>
    }

    return (
      <div>
        <div>
           <h2>{data.title}</h2>
        </div>
        <div>
                    
          <img src={data.imageUrl} alt={data.title} />
          <p>{data.description}</p>
          <p>Price: {data.price === data.discountedPrice? `kr ${data.price}`: `kr ${data.discountedPrice}, save kr ${price - discountedPrice}`}</p>
        </div>
        <div>
          {data.rating ? <p>Rating: {data.rating}</p> : ""}
        </div>
        <section>
          <h3>Reviews:</h3>
            {data.reviews ? <div>
              {data.reviews.map((review) => {
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
    )  
}

export default ProductPage;

