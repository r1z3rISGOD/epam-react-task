import React from "react";
import ResultsBody from "../../dumb/ResultsBody/ResultsBody";
import ResultsHeader from "../../dumb/ResultsHeader/ResultsHeader";

export default class Results extends React.Component {
    render() {
        const {resultsCount} = this.props;

        return(
            <>
                <ResultsHeader resultsCount={resultsCount}/>
                <ResultsBody/>
            </>
        )
    }
}
