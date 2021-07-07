import React from "react";
import "./ResultsSort.scss"

export default function ResultsSort(props) {
    if(props.resultsCount > 0) {
        return(
            <div className="results-sort">
                <span className="results-sort__text">Sort by</span>
                <button onClick={(e) => {
                    props.activeSort(e.target)
                    props.resultsSort()
                }}
                        value="release date" className="results-sort__link results-sort__link-release">release date</button>
                <button onClick={(e) => {
                    props.activeSort(e.target)
                    props.resultsSort()
                }}
                        value="rating" className="results-sort__link results-sort__link-rating results-sort__link-active">rating</button>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}


