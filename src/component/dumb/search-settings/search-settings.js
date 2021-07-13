"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSettings = void 0;
var React = require("react");
var search_filter_1 = require("../search-filter");
var search_button_1 = require("../search-button");
require("./search-settings.scss");
var SearchSettings = function (_a) {
    var request = _a.request, setting = _a.setting, setSetting = _a.setSetting, resultsSort = _a.resultsSort;
    return (React.createElement("div", { className: "search-settings" },
        React.createElement(search_filter_1.SearchFilter, { setSetting: setSetting, setting: setting }),
        React.createElement(search_button_1.SearchButton, { resultsSort: resultsSort, request: request, setting: setting })));
};
exports.SearchSettings = SearchSettings;
//# sourceMappingURL=search-settings.js.map