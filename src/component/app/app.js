"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./app.scss");
require("./netflix-bg.jpg");
var search_1 = require("../smart/search");
var film_1 = require("../dumb/film");
var results_1 = require("../smart/results");
var footer_1 = require("../dumb/footer");
var react_redux_1 = require("react-redux");
var not_found_1 = require("../dumb/not-found");
var App = function () {
    var history = react_router_dom_1.useHistory();
    var hasOpened = react_redux_1.useSelector(function (state) { return state.filmHasOpened; });
    var fetchedData = react_redux_1.useSelector(function (state) { return state.fetchedData; });
    var resultsSort = react_redux_1.useSelector(function (state) { return state.resultsSort; });
    var searchSetting = react_redux_1.useSelector(function (state) { return state.searchSetting; });
    var searchData = react_redux_1.useSelector(function (state) { return state.searchData; });
    var openedFilm = react_redux_1.useSelector(function (state) { return state.openedFilm; });
    var openedFilmsGenre = react_redux_1.useSelector(function (state) { return state.openedFilmsGenre; });
    react_1.useEffect(function () {
        if (window.location.pathname.includes('/search/films')) {
            history.push("/search/?request=" + searchData);
        }
    });
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", { className: "app-wrapper" },
            React.createElement("div", { className: "app-header" },
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { exact: true, path: '/', render: function () { return React.createElement(search_1.Search, { resultsSort: resultsSort }); } }),
                    React.createElement(react_router_dom_1.Route, { path: '/search/:request?', render: function (props) { return React.createElement(search_1.Search, { data: props, resultsSort: resultsSort }); } }),
                    React.createElement(react_router_dom_1.Route, { exact: true, path: '/film/:id?', render: function (props) { return React.createElement(film_1.Film, { data: props, openedFilm: openedFilm }); } }),
                    React.createElement(react_router_dom_1.Route, { path: '*', component: not_found_1.NotFound }))),
            React.createElement(results_1.Results, { openedFilmsGenre: openedFilmsGenre, hasOpened: hasOpened, fetchedData: fetchedData, searchData: searchData, searchSetting: searchSetting }),
            React.createElement(footer_1.Footer, null))));
};
exports.App = App;
//# sourceMappingURL=app.js.map