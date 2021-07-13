"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = void 0;
var React = require("react");
var react_1 = require("react");
var results_body_container_1 = require("../../dumb/results-body-container");
var results_header_1 = require("../../dumb/results-header");
var Results = function (_a) {
    var hasOpened = _a.hasOpened, fetchedData = _a.fetchedData, searchData = _a.searchData, searchSetting = _a.searchSetting, openedFilmsGenre = _a.openedFilmsGenre;
    var _b = react_1.useState('vote_average'), active = _b[0], setActive = _b[1];
    var resultsCount = fetchedData.length;
    return (React.createElement(React.Fragment, null,
        React.createElement(results_header_1.ResultsHeader, { active: active, setActive: setActive, hasOpened: hasOpened, resultsCount: resultsCount, searchData: searchData, searchSetting: searchSetting, openedFilmsGenre: openedFilmsGenre }),
        React.createElement(results_body_container_1.ResultsBodyContainer, { searchSetting: searchSetting, active: active, fetchedData: fetchedData })));
};
exports.Results = Results;
//# sourceMappingURL=results.js.map