import React, { useState, useEffect } from "react";

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        setDebounceTimeout(
            setTimeout(() => {
                onSearch(term);
            }, 500)
        );
    };

    useEffect(() => {
        return () => {
            if (debounceTimeout) {
                clearTimeout(debounceTimeout);
            }
        };
    }, [debounceTimeout]);

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
        />
    );
}

export default Search;
