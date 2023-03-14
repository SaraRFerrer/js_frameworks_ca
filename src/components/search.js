import React, { useState } from "react";
import { useSelector } from "react-redux"


function Search() {
    const { isLoading, data } = useSelector((state) => state.products);
    const [query, setQuery] = useState("");

    const search = function (data, query) {
      return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
    };

    let result = search(data, query);
    if(query.trim() === "" || query.length < 2) {
        result();
    }

    function onInputQuery(event) {
        setQuery(event.currentTarget.value);
      }



    return (
        <div className="search-container">
            <input 
              className="searchbar" 
              type="text" 
              placeholder="Search products..." 
              disabled={isLoading}
              value={query}
              onChange={onInputQuery} />
      </div>
    )
}
export default Search
