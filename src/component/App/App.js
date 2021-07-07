import React from "react";
import "./App.scss"
import "./netflix-bg.jpg"
import Search from "../smart/Search/Search";
import Results from "../smart/Results/Results";
import Footer from "../dumb/Footer/Footer";


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
