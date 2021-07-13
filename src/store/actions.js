"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearStore = exports.putOpenedFilmsGenreToStore = exports.putOpenedFilmToStore = exports.putFetchedArrayToStore = exports.changeTypeOfResultsSorting = exports.changeTypeOfSearch = exports.changeSearchRequestedData = void 0;
var index_1 = require("../index");
var changeSearchRequestedData = function (data) {
    return {
        type: index_1.CHANGE_SEARCH_REQUESTED_DATA,
        payload: data
    };
};
exports.changeSearchRequestedData = changeSearchRequestedData;
var changeTypeOfSearch = function (data) {
    return {
        type: index_1.CHANGE_TYPE_OF_SEARCH,
        payload: data
    };
};
exports.changeTypeOfSearch = changeTypeOfSearch;
var changeTypeOfResultsSorting = function (data) {
    return {
        type: index_1.CHANGE_TYPE_OF_RESULTS_SORTING,
        payload: data
    };
};
exports.changeTypeOfResultsSorting = changeTypeOfResultsSorting;
var putFetchedArrayToStore = function (data) {
    return {
        type: index_1.PUT_FETCHED_ARRAY_TO_STORE,
        payload: data
    };
};
exports.putFetchedArrayToStore = putFetchedArrayToStore;
var putOpenedFilmToStore = function (data) {
    return {
        type: index_1.PUT_OPENED_FILM_TO_STORE,
        payload: data
    };
};
exports.putOpenedFilmToStore = putOpenedFilmToStore;
var putOpenedFilmsGenreToStore = function (data) {
    return {
        type: index_1.PUT_OPENED_FILMS_GENRE_TO_STORE,
        payload: data
    };
};
exports.putOpenedFilmsGenreToStore = putOpenedFilmsGenreToStore;
var clearStore = function () {
    return {
        type: index_1.CLEAR_STORE
    };
};
exports.clearStore = clearStore;
//# sourceMappingURL=actions.js.map