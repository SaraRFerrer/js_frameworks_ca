/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import ProductCard from "./productCard"
import ApiHook from "../hooks/apiHook";

function Search() {
    const { isLoading, data } = useSelector((state) => state.products);
    const [query, setQuery] = useState("");

    let result = search(data, query);
    if(query.trim() === "" || query.length < 2) {
        result();
    }

    function onInputQuery(event) {
        setQuery(event.currentTarget.value);
      }



    return (
        <div className="search-container">
        <form action="">
            <input 
              className="searchbar" 
              type="text" 
              placeholder="Search products..." 
              disabled={isLoading}
              value={query}
              onChange={handleSearch} />
        </form>
      </div>
    )
}
export default Search
*/