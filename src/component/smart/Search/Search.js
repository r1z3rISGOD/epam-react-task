import React from "react";
import SearchInput from "../../dumb/SearchInput/SearchInput";
import SearchHeadings from "../../dumb/SearchHeadings/SearchHeadings";
import SearchSettings from "../../dumb/SearchSettings/SearchSettings";
import "./Search.scss"


export default class Search extends React.Component {
    render() {
        return(
            <div className="search">
                <SearchHeadings/>
                <SearchInput/>
                <SearchSettings/>
            </div>
        )
    }
}
