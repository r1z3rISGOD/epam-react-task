import React from "react";
import SearchFilter from "../SearchFilter/SearchFilter";
import SearchButton from "../SearchButton/SearchButton";
import "./SearchSettings.scss"


export default function SearchSettings() {
    return(
        <div className="search-settings">
            <SearchFilter/>
            <SearchButton/>
        </div>
    )
}
