import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import ApiHook from "../hooks/apiHook";
import styles from "../styleModules/product.module.css"
import { CartContext } from "../context/cart";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function ProductPage() {
    const params = useParams();
    let url = `https://api.noroff.dev/api/v1/online-shop/`;
    const { data, isLoading, isError, price, discountedPrice } = ApiHook(url + params.id );

    const { addToCart } = useContext(CartContext);


    if(isLoading) {
        return <div>Loading...</div>
      }
    
    if (isError) {
      return <div>An error has accured</div>
    }

   const alert = () => {
    toast.success('An item has been added to your cart !', {
      position: toast.POSITION.TOP_RIGHT
    });
   };

    

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
                  <button className={styles.btn}
                  onClick={() => {
                    addToCart(data);
                    alert();

                  }}>
                    Add to cart

                  </button>
                  <ToastContainer 
                  position="top-right"
                  autoClose={5000}
                  />
          </section>
                
      </div>        
    )  
}

export default ProductPage;

