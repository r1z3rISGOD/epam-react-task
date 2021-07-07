import React from "react";
import SearchInput from "../../dumb/SearchInput/SearchInput";
import SearchHeadings from "../../dumb/SearchHeadings/SearchHeadings";
import SearchSettings from "../../dumb/SearchSettings/SearchSettings";
import "./Search.scss"


export default class Search extends React.Component {

    activeSetting = (item) => {
        const genre = document.querySelector(".search-filter__button-genre");
        const title = document.querySelector(".search-filter__button-title");
        genre.classList.remove("search-filter__button-active");
        title.classList.remove("search-filter__button-active");
        item.classList.add("search-filter__button-active");
    }

    render() {
        const {searchData, searchSetting} = this.props;
        const {activeSetting} = this;

        return(
            <div className="search">
                <SearchHeadings/>
                <SearchInput
                    searchData={searchData}
                    searchSetting={searchSetting}/>
                <SearchSettings
                    searchData={searchData}
                    searchSetting={searchSetting}
                    activeSetting={activeSetting}
                />
            </div>
        )
    }
}
