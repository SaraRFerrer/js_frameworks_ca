import React from "react";
import { useParams } from "react-router-dom";
import ApiHook from "../hooks/apiHook";
import { Link } from "react-router-dom";
import styles from "../styleModules/product.module.css"


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
      <div className={styles.container}>
        <div >
           <h2>{data.title}</h2>
        </div>
        <div>
                    
          <img src={data.imageUrl} alt={data.title} className={styles.productImg} />
          <p className={styles.description}>{data.description}</p>
          <p className={styles.price}>Price: {data.price === data.discountedPrice? `${data.price} kr `: `kr ${data.discountedPrice},  ${price - discountedPrice} save kr`}</p>
        </div>
        <div className={styles.rating}>
          {data.rating ? <p>Average Rating: {data.rating}</p> : ""}
        </div>
        <section>
          <h3>Reviews:</h3>
            {data.reviews ? <div>
              {data.reviews.map((review) => {
                return (
                  <div>
                    <p>{review.username}</p>
                    <p>Rating: {review.rating}</p>
                    <p>"{review.description}"</p>
                  </div>
                  );
                  })}
                  </div> : ""}
          </section>
                <div className={styles.btnContainer} >
                    <Link to={`/cart/${id}`} className={styles.btn}>Add to cart </Link>
                </div>
      </div>        
    )  
}

export default ProductPage;

