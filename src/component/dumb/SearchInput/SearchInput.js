import React from "react";
import "./SearchInput.scss"

export default function SearchInput(props) {
        return(
            <form
                onSubmit={() => {
                    props.searchData()
                    props.searchSetting()
                }}>
            <input type="text" className="search__input"/>
                    <i className="fa fa-envelope-o fa-fw"/>
            </form>
        )
}
