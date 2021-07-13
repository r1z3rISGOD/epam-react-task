"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
var React = require("react");
var react_1 = require("react");
var search_input_1 = require("../../dumb/search-input");
var search_heading_find_1 = require("../../dumb/search-heading-find/search-heading-find");
var search_settings_1 = require("../../dumb/search-settings");
var search_heading_netflix_1 = require("../../dumb/search-heading-netflix");
require("./search.scss");
var Search = function (_a) {
    var resultsSort = _a.resultsSort;
    var _b = react_1.useState(''), request = _b[0], setRequest = _b[1];
    var _c = react_1.useState('title'), setting = _c[0], setSetting = _c[1];
    return (React.createElement("div", { className: "search" },
        React.createElement(search_heading_find_1.SearchHeadingFind, null,
            React.createElement(search_heading_netflix_1.SearchHeadingNetflix, null)),
        React.createElement(search_input_1.SearchInput, { setRequest: setRequest, request: request, setting: setting, resultsSort: resultsSort }),
        React.createElement(search_settings_1.SearchSettings, { resultsSort: resultsSort, request: request, setSetting: setSetting, setting: setting })));
};
exports.Search = Search;
//# sourceMappingURL=search.js.map