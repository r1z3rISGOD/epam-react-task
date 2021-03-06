"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
var React = require("react");
var ErrorBoundary = function (_a) {
    var children = _a.children, ok = _a.ok;
    var OopsText = function () { return (React.createElement("h2", null, "Something went wrong!")); };
    return React.createElement(React.Fragment, null, ok ? children : React.createElement(OopsText, null));
};
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=error-boundary.js.map