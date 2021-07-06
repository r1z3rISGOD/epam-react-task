import React from "react";
import "./app.scss"
import "./netflix-bg.jpg"
import Search from "../search/search";
import Results from "../results/results";
import Footer from "../footer/footer";

export default class App extends React.Component {
    state = {
        resultsCount: null,
        resultsSort: "release date",
        searchInput: null,
        searchFilter: "TITLE"
    }
    render() {
        return (
            <div className="app-wrapper">
                <div className="app-header">
                    <Search/>
                </div>
                <Results/>
                <Footer/>
            </div>
        );
    }
}
