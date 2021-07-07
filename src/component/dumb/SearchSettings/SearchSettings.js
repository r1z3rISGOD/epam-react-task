import React from "react";
import SearchFilter from "../SearchFilter/SearchFilter";
import SearchButton from "../SearchButton/SearchButton";
import "./SearchSettings.scss"


export default function SearchSettings(props) {
    return(
        <div className="search-settings">
            <SearchFilter
                activeTitle={props.activeTitle}
                activeGenre={props.activeGenre}
            />
            <SearchButton
                searchData={props.searchData}
                searchSetting={props.searchSetting}
            />
        </div>
    )
}
