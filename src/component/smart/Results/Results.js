import React from "react";
import ResultsBody from "../../dumb/ResultsBody/ResultsBody";
import ResultsHeader from "../../dumb/ResultsHeader/ResultsHeader";

export default class Results extends React.Component {

    activeSort = (item) => {
        const releaseDate = document.querySelector(".results-sort__link-release");
        const rating = document.querySelector(".results-sort__link-rating");
        releaseDate.classList.remove("results-sort__link-active");
        rating.classList.remove("results-sort__link-active");
        item.classList.add("results-sort__link-active");
    }

    render() {
        const {resultsCount, resultsSort} = this.props;
        const {activeSort} = this;

        return(
            <>
                <ResultsHeader
                    resultsCount={resultsCount}
                    resultsSort={resultsSort}
                    activeSort={activeSort}
                />
                <ResultsBody/>
            </>
        )
    }
}
