import React, { useState } from "react";
import ProductCard from "../components/productCard";
import ApiHook from "../hooks/apiHook";
import styles from "../styleModules/grid.module.css";

const url = "https://api.noroff.dev/api/v1/online-shop";
function Products({ products, isLoading, isError }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>An error has accured</div>;
  }
  return (
    <div className={styles.Grid}>
      {products.map((product) => (
        <ProductCard key={products.id} product={product} />
      ))}
    </div>
  );
}

function Home() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = ApiHook(url);
  if (!isLoading) {
    console.log(data);
  }

  const query = data.filter((product) => {
    return product.title.toLowerCase().startsWith(search.toLowerCase());
  });

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.Homeheader}>All Products</h1>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search products..."
            disabled={isLoading}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div>
        {query.length > 0 ? (
          <Products products={query} isLoading={isLoading} isError={isError} />
        ) : (
          <div>Nothing Found</div>
        )}
      </div>
    </div>
  );
}
export default Home;
