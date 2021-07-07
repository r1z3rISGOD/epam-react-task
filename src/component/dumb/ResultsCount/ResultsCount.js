import React from "react";
import PropTypes from "prop-types"
import "./ResultsCount.scss"

export default function ResultsCount(props) {
    return(
        <span className="results-count">
            {props.number} movies found
        </span>
    )
}

ResultsCount.propTypes = {
    number: PropTypes.number.isRequired
}
