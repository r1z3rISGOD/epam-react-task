"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInput = void 0;
var React = require("react");
require("./search-input.scss");
var SearchInput = function (_a) {
    var setRequest = _a.setRequest, request = _a.request, setting = _a.setting, resultsSort = _a.resultsSort, fetchingAllFilms = _a.fetchingAllFilms;
    return (React.createElement("form", { className: 'search__form', onSubmit: function (event) {
            event.preventDefault();
            if (request) {
                fetchingAllFilms(request, setting, resultsSort);
            }
        } },
        React.createElement("input", { onChange: function (event) { return setRequest(event.target.value); }, type: "text", className: "search__input" })));
};
exports.SearchInput = SearchInput;
//# sourceMappingURL=search-input.js.map