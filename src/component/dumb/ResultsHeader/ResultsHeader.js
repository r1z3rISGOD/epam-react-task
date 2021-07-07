import React from "react";
import ErrorBoundary from "../../smart/ErrorBoundary/ErrorBoundary";
import ResultsCount from "../ResultsCount/ResultsCount";
import ResultsSort from "../ResultsSort/ResultsSort";
import "./ResultsHeader.scss"

export default function ResultsHeader(props) {
    return(
        <div className="results-header">
            <div className="results-data">
                <ErrorBoundary>
                    <ResultsCount resultsCount={props.resultsCount}/>
                </ErrorBoundary>
                <ResultsSort resultsCount={props.resultsCount}/>
            </div>
        </div>
    )
}
