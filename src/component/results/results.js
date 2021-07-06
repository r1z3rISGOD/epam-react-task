import React from "react";
import "./results.scss"
import ResultsCount from "../results-count/results-count";
import ResultsSort from "../results-sort/results-sort";
import ResultsBody from "../results-body/results-body";

export default class Results extends React.Component {
    render() {
        return(
            <>
                <div className="results-header">
                    <div className="results-data">
                        <ResultsCount/>
                        <ResultsSort/>
                    </div>
                </div>
                <ResultsBody/>
            </>
        )
    }
}
