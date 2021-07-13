"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = exports.initialState = void 0;
var index_1 = require("../index");
exports.initialState = {
    searchData: '',
    searchSetting: 'title',
    resultsSort: 'vote_average',
    fetchedData: [],
    filmHasOpened: false,
    openedFilm: undefined,
    openedFilmsGenre: ''
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case index_1.CHANGE_SEARCH_REQUESTED_DATA:
            return __assign(__assign({}, state), { searchData: action.payload });
        case index_1.CHANGE_TYPE_OF_SEARCH:
            return __assign(__assign({}, state), { searchSetting: action.payload });
        case index_1.CHANGE_TYPE_OF_RESULTS_SORTING:
            return __assign(__assign({}, state), { resultsSort: action.payload });
        case index_1.PUT_FETCHED_ARRAY_TO_STORE:
            return __assign(__assign({}, state), { fetchedData: action.payload });
        case index_1.PUT_OPENED_FILM_TO_STORE:
            return __assign(__assign({}, state), { openedFilm: action.payload, filmHasOpened: true });
        case index_1.PUT_OPENED_FILMS_GENRE_TO_STORE:
            return __assign(__assign({}, state), { openedFilmsGenre: action.payload });
        case index_1.CLEAR_STORE:
            return __assign(__assign({}, state), { searchData: '', searchSetting: 'title', fetchedData: [], filmHasOpened: false, openedFilm: {}, openedFilmsGenre: null });
    }
    return state;
};
exports.rootReducer = rootReducer;
//# sourceMappingURL=redusers.js.map