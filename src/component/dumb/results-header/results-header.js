"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsHeader = void 0;
var React = require("react");
require("./results-header.scss");
var error_boundary_1 = require("../../smart/error-boundary");
var results_count_1 = require("../results-count");
var results_sort_1 = require("../results-sort");
var results_data_1 = require("../results-data");
var results_related_1 = require("../results-related");
var ResultsHeader = function (_a) {
    var resultsCount = _a.resultsCount, hasOpened = _a.hasOpened, active = _a.active, setActive = _a.setActive, searchData = _a.searchData, searchSetting = _a.searchSetting, openedFilmsGenre = _a.openedFilmsGenre;
    if (resultsCount > 0 && !hasOpened) {
        return (React.createElement("div", { className: "results-header" },
            React.createElement(results_data_1.ResultsData, null,
                React.createElement(error_boundary_1.ErrorBoundary, null,
                    React.createElement(results_count_1.ResultsCount, { resultsCount: resultsCount })),
                React.createElement(results_sort_1.ResultsSort, { active: active, setActive: setActive, resultsCount: resultsCount, searchData: searchData, searchSetting: searchSetting }))));
    }
    else if (hasOpened) {
        return (React.createElement("div", { className: "results-header" },
            React.createElement(results_data_1.ResultsData, null,
                React.createElement(results_related_1.ResultsRelated, { openedFilmsGenre: openedFilmsGenre }))));
    }
    else {
        return (React.createElement("div", { className: "results-header" }));
    }
};
exports.ResultsHeader = ResultsHeader;
//# sourceMappingURL=results-header.js.map