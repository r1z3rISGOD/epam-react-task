"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsBodyContainer = void 0;
var React = require("react");
var react_1 = require("react");
var results_body_1 = require("../results-body");
require("./results-body-container.scss");
var results_item_1 = require("../results-item");
var PropTypes = require("prop-types");
var resultsBodyContainerProps = {
    fetchedData: PropTypes.array,
    active: PropTypes.string,
    searchSetting: PropTypes.string,
    fetchingAllFilms: PropTypes.func,
    fetchingFilm: PropTypes.func
};
var ResultsBodyContainer = function (_a) {
    var fetchedData = _a.fetchedData, active = _a.active, searchSetting = _a.searchSetting, fetchingAllFilms = _a.fetchingAllFilms, fetchingFilm = _a.fetchingFilm;
    react_1.useEffect(function () {
        fetchingAllFilms(fetchedData, searchSetting, active);
    });
    if (fetchedData.length === 0) {
        return (React.createElement("div", { className: "results-body-container" },
            React.createElement(results_body_1.ResultsBody, null,
                React.createElement("div", { className: "results-body__no-films" },
                    React.createElement("span", { className: "results-body__text" }, " No films found ")))));
    }
    return (React.createElement("div", { className: "results-body-container" },
        React.createElement(results_body_1.ResultsBody, null,
            React.createElement("div", { className: "results-body__films" }, fetchedData.map(function (film) {
                return React.createElement(results_item_1.ResultsItem, { active: active, title: film.title, key: film.id, year: film.release_date, picture: film.poster_path, genres: film.genres, id: film.id, fetchingFilm: fetchingFilm });
            })))));
};
exports.ResultsBodyContainer = ResultsBodyContainer;
//# sourceMappingURL=results-body-container.js.map