"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchButton = void 0;
var React = require("react");
require("./search-button.scss");
var SearchButton = function (_a) {
    var request = _a.request, setting = _a.setting, resultsSort = _a.resultsSort, fetchingAllFilms = _a.fetchingAllFilms;
    return (React.createElement("button", { onClick: function () {
            if (request !== '') {
                fetchingAllFilms(request, setting, resultsSort);
            }
        }, className: "search-settings__button" }, "SEARCH"));
};
exports.SearchButton = SearchButton;
//# sourceMappingURL=search-button.js.map