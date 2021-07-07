import React from "react";
import "./SearchFilter.scss"

export default function SearchFilter() {
    return(
        <div className="search-filter">
            <span className="search-filter__text">SEARCH BY</span>
            <button className="search-filter__button search-filter__button-active">TITLE</button>
            <button className="search-filter__button">GENRE</button>
        </div>
    )
}
