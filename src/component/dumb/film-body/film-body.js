"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmBody = void 0;
var React = require("react");
var FilmBody = function (_a) {
    var openedFilm = _a.openedFilm;
    return (React.createElement("div", { className: 'film-body' },
        React.createElement("img", { className: 'film-body__img', src: openedFilm["poster_path"], alt: openedFilm["title"] }),
        React.createElement("div", { className: 'film-data' },
            React.createElement("div", { className: 'film-data__title-rating' },
                React.createElement("span", { className: 'film-data__title' }, openedFilm["title"]),
                React.createElement("span", { className: 'film-data__rating' }, openedFilm["vote_average"])),
            React.createElement("div", { className: 'film-data__date-runtime' },
                React.createElement("span", { className: 'film-data__date' }, openedFilm["release_date"].substr(0, 4)),
                React.createElement("span", { className: 'film-data__time' }, (openedFilm["runtime"]) + " min")),
            React.createElement("span", { className: 'film-data__overview' }, openedFilm["overview"]))));
};
exports.FilmBody = FilmBody;
//# sourceMappingURL=film-body.js.map