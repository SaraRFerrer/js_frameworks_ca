import React from "react";
import ProductCard from "../components/productCard";
import ApiHook from "../hooks/apiHook";

const url = 'https://api.noroff.dev/api/v1/online-shop';

function Products ({ products, isLoading, isError}) {
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>An error has accured</div>
  }
  return (
    <div className="Grid">
      {products.map((product) => (
        <ProductCard key={products.id} product={product} />
      ))}
    </div>
  )
}

function Home() {
  const {data, isLoading, isError} = ApiHook(url);
  if(!isLoading) {
    console.log(data)
  }

  return (
    <div>
      <h1 className="Home--header">All Products</h1>
      <div>
        <Products products={data} isLoading={isLoading} isError={isError}/>
      </div>
    </div>
  );
}
export default Home;