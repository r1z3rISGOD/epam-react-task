import React from "react";
import ResultsBody from "../../dumb/ResultsBody/ResultsBody";
import ResultsHeader from "../../dumb/ResultsHeader/ResultsHeader";

export default class Results extends React.Component {
    render() {
        return(
            <>
                <ResultsHeader number={7}/>
                <ResultsBody/>
            </>
        )
    }
}
