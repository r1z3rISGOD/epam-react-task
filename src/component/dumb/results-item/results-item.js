"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsItem = void 0;
var React = require("react");
require("./results-item.scss");
var ResultsItem = function (_a) {
    var title = _a.title, genres = _a.genres, year = _a.year, picture = _a.picture, id = _a.id, active = _a.active, fetchingFilm = _a.fetchingFilm;
    return (React.createElement("div", { className: "item", onClick: function () { return fetchingFilm(id, active); } },
        React.createElement("img", { className: "item__img", src: picture, alt: title }),
        React.createElement("div", { className: "item-data" },
            React.createElement("div", { className: 'item-data__text' },
                React.createElement("span", { className: "item-data__title" }, title.toUpperCase()),
                React.createElement("span", { className: "item-data__genres" }, genres[0])),
            React.createElement("span", { className: "item-data__year" }, year.substr(0, 4)))));
};
exports.ResultsItem = ResultsItem;
//# sourceMappingURL=results-item.js.map