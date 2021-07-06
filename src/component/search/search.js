import React from "react";
import SearchInput from "../search-input/search-input";
import SearchFilter from "../search-filter/search-filter";
import SearchButton from "../search-button/search-button";
import "./search.scss"

export default class Search extends React.Component {
    render() {
        return(
            <div className="search">
                <h1 className="search__heading-1">netflixroulette</h1>
                <h2 className="search__heading-2">FIND YOUR MOVIE</h2>
                <SearchInput/>
                <div className="search-settings">
                    <SearchFilter/>
                    <SearchButton/>
                </div>
            </div>
        )
    }
}
