import React from "react";
import SearchInput from "../../dumb/SearchInput/SearchInput";
import SearchHeadings from "../../dumb/SearchHeadings/SearchHeadings";
import SearchSettings from "../../dumb/SearchSettings/SearchSettings";
import "./Search.scss"


export default class Search extends React.Component {

    activeTitle = () => {
        const genre = document.querySelector(".search-filter__button-genre");
        const title = document.querySelector(".search-filter__button-title");
        genre.classList.remove("search-filter__button-active");
        title.classList.add("search-filter__button-active");
    }

    activeGenre = () => {
        const genre = document.querySelector(".search-filter__button-genre");
        const title = document.querySelector(".search-filter__button-title");
        title.classList.remove("search-filter__button-active");
        genre.classList.add("search-filter__button-active");
    }

    render() {
        const {searchData, searchSetting} = this.props
        return(
            <div className="search">
                <SearchHeadings/>
                <SearchInput/>
                <SearchSettings
                    searchData={searchData}
                    searchSetting={searchSetting}
                    activeTitle={this.activeTitle}
                    activeGenre={this.activeGenre}
                />
            </div>
        )
    }
}
