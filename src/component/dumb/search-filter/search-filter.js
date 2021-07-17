"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchFilter = void 0;
var React = require("react");
require("./search-filter.scss");
var SearchFilter = function (_a) {
    var setSetting = _a.setSetting, setting = _a.setting;
    if (setting === 'title') {
        return (React.createElement("div", { className: "search-filter" },
            React.createElement("span", { className: "search-filter__text" }, "SEARCH BY"),
            React.createElement("button", { className: "search-filter__button search-filter__button-active" }, "TITLE"),
            React.createElement("button", { onClick: function () {
                    setSetting('genres');
                }, value: "genres", className: "search-filter__button btn" }, "GENRE")));
    }
    if (setting === 'genres') {
        return (React.createElement("div", { className: "search-filter" },
            React.createElement("span", { className: "search-filter__text" }, "SEARCH BY"),
            React.createElement("button", { onClick: function () {
                    setSetting('title');
                }, value: "title", className: "search-filter__button btn" }, "TITLE"),
            React.createElement("button", { className: "search-filter__button search-filter__button-active" }, "GENRE")));
    }
};
exports.SearchFilter = SearchFilter;
//# sourceMappingURL=search-filter.js.map