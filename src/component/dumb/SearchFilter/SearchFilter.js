import React from "react";
import "./SearchFilter.scss"

export default function SearchFilter(props) {
    return(
        <div className="search-filter">
            <span className="search-filter__text">SEARCH BY</span>
            <button onClick={(e) => {
                props.activeSetting(e.target)
            }} value="TITLE" className="search-filter__button search-filter__button-title search-filter__button-active">TITLE</button>
            <button onClick={(e) => {
                props.activeSetting(e.target)
            }} value="GENRE" className="search-filter__button search-filter__button-genre">GENRE</button>
        </div>
    )
}
