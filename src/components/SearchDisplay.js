import React, { useState } from "react";
import Search from "./Search";

function SearchDisplay() {
    const [results, setResults] = useState([]);

    const handleSearch = (term) => {
        if (term) {
            // Simulate an API call
            fetch(`https://dummyjson.com/products/search?q=${term}`)
                .then((response) => response.json())
                .then((data) => {
                    setResults(data.products);
                });
        } else {
            setResults([]);
        }
    };

    return (
        <div>
            <Search onSearch={handleSearch} />
            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchDisplay;


