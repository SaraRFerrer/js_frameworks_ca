import React from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../components/singleProductCard";
import ApiHook from "../hooks/apiHook";

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

function Productpage() {
    let { id } = useParams();
    let url = `https://api.noroff.dev/api/v1/online-shop/${id}`;
    const [data, isLoading, isError] = ApiHook(url,{} );
    if(!isLoading) {
        console.log(data)
      }

    return (
        <div>
            <Product products={data} isLoading={isLoading} isError={isError} />
        </div>
    )
}

export default Productpage;

