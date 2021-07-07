import React from "react";
import "./App.scss"
import "./netflix-bg.jpg"
import Search from "../smart/Search/Search";
import Results from "../smart/Results/Results";
import Footer from "../dumb/Footer/Footer";
import {bindActionCreators} from "redux";
import {changeSearchData, changeSearchSetting} from "../../store/actions";
import {connect} from "react-redux";


class App extends React.Component {
    render() {
        const {changeSearchSetting, changeSearchData, resultsCount} = this.props;

        return (
            <div className="app-wrapper">
                <div className="app-header">
                    <Search
                        searchData={changeSearchData}
                        searchSetting={changeSearchSetting}
                    />
                </div>
                <Results resultsCount={resultsCount}/>
                <Footer/>
            </div>
        );
    }
}

const putStateToProps = (state) => {
    console.log(state)
    return {
        searchData: state.searchData,
        searchSetting: state.searchSetting,
        resultsCount: state.resultsCount,
        resultsSort: state.resultsSort
    }
}

const putActionsToProps = (dispatch) => {
    return {
        changeSearchData: bindActionCreators(changeSearchData, dispatch),
        changeSearchSetting: bindActionCreators(changeSearchSetting, dispatch)
    }
}

export default connect(putStateToProps, putActionsToProps)(App)
