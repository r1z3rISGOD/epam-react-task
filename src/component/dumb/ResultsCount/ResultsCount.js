import React from "react";
import PropTypes from "prop-types"
import "./ResultsCount.scss"

export default function ResultsCount(props) {
    if(props.resultsCount > 0) {
        return (
            <span className="results-count">
            {props.resultsCount} movies found
        </span>
        )
    } else {
        return (
            <></>
        )
    }
}

ResultsCount.propTypes = {
    resultsCount: PropTypes.number.isRequired
}
