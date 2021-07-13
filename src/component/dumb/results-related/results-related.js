"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsRelated = void 0;
var React = require("react");
require("./results-related.scss");
var ResultsRelated = function (_a) {
    var openedFilmsGenre = _a.openedFilmsGenre;
    return (React.createElement("span", { className: "results-related" },
        "Films by ",
        openedFilmsGenre,
        " genre"));
};
exports.ResultsRelated = ResultsRelated;
//# sourceMappingURL=results-related.js.map