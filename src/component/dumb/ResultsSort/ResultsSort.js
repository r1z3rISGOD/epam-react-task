import React from "react";
import "./ResultsSort.scss"

export default function ResultsSort(props) {
    if(props.resultsCount > 0) {
        return(
            <div className="results-sort">
                <span className="results-sort__text">Sort by</span>
                <a className="results-sort__link" href="#">release date</a>
                <a className="results-sort__link results-sort__link-active" href="#">rating</a>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}
