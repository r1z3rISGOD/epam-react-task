"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsCount = void 0;
var React = require("react");
require("./results-count.scss");
var ResultsCount = function (_a) {
    var resultsCount = _a.resultsCount;
    if (resultsCount > 0) {
        return (React.createElement("span", { className: "results-count" },
            resultsCount,
            " movies found"));
    }
    else {
        return (React.createElement(React.Fragment, null));
    }
};
exports.ResultsCount = ResultsCount;
//# sourceMappingURL=results-count.js.map