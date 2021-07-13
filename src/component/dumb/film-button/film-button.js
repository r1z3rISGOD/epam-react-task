"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmButton = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var actions_1 = require("../../../store/actions");
var styled_components_1 = require("styled-components");
var Button = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 130px;\n  height: 50px;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: #e55f64;\n  font-weight: bold;"], ["\n  width: 130px;\n  height: 50px;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: #e55f64;\n  font-weight: bold;"])));
var FilmButton = function () {
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    return (React.createElement(Button, { onClick: function () {
            history.push('/');
            dispatch(actions_1.clearStore());
            console.clear();
        } }, "SEARCH"));
};
exports.FilmButton = FilmButton;
var templateObject_1;
//# sourceMappingURL=film-button.js.map