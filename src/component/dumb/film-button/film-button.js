"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmButton = void 0;
var React = require("react");
var styled_components_1 = require("styled-components");
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 130px;\n  height: 50px;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: #e55f64;\n  font-weight: bold;"], ["\n  width: 130px;\n  height: 50px;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: #e55f64;\n  font-weight: bold;"])));
var FilmButton = function (_a) {
    var onClick = _a.onClick;
    return (React.createElement(Button, { className: 'btn', onClick: function () { return onClick(); } }, "SEARCH"));
};
exports.FilmButton = FilmButton;
var templateObject_1;
//# sourceMappingURL=film-button.js.map