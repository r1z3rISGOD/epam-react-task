import React from "react";
import "./SearchButton.scss"

export default function SearchButton(props) {
    return(
        <button onClick={() => {
            props.searchData()
            props.searchSetting()
        }} className="search-settings__button">SEARCH</button>
    )
}
