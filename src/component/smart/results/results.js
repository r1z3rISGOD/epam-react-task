"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = void 0;
var React = require("react");
var react_1 = require("react");
var results_body_container_1 = require("../../dumb/results-body-container");
var results_header_1 = require("../../dumb/results-header");
var actions_1 = require("../../../store/actions");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var fetchService_1 = require("../../services/fetchService");
var react_router_dom_1 = require("react-router-dom");
var Results = function (_a) {
    var hasOpened = _a.hasOpened, fetchedData = _a.fetchedData, searchData = _a.searchData, searchSetting = _a.searchSetting, openedFilmsGenre = _a.openedFilmsGenre;
    var _b = react_1.useState('vote-average'), active = _b[0], setActive = _b[1];
    var _c = react_1.useState(0), headerType = _c[0], setHeaderType = _c[1];
    var _d = react_1.useState(0), sortVision = _d[0], setSortVision = _d[1];
    var resultsCount = fetchedData.length;
    var dispatch = react_redux_1.useDispatch();
    var location = react_router_1.useLocation().search;
    var history = react_router_dom_1.useHistory();
    var fetchingAllFilms = function (data, setting, activeGenre) { return __awaiter(void 0, void 0, void 0, function () {
        var params, searchRequest, newFetchedFilms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = new URLSearchParams(location);
                    searchRequest = params.getAll('request')[0];
                    if (!(data.length === 0 && searchRequest)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchService_1.fetchData(searchRequest, setting, activeGenre)];
                case 1:
                    newFetchedFilms = _a.sent();
                    if (newFetchedFilms.data.length > 0) {
                        dispatch(actions_1.putFetchedArrayToStore(newFetchedFilms.data));
                        dispatch(actions_1.changeSearchRequestedData(searchRequest));
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var fetchingFilm = function (id, activeGenre) { return __awaiter(void 0, void 0, void 0, function () {
        var fetchedFilm, newFetchedArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchService_1.fetchFilm(id)];
                case 1:
                    fetchedFilm = _a.sent();
                    dispatch(actions_1.putOpenedFilmToStore(fetchedFilm));
                    dispatch(actions_1.putOpenedFilmsGenreToStore(fetchedFilm.genres[0]));
                    history.push("/film/" + fetchedFilm.id);
                    return [4 /*yield*/, fetchService_1.fetchData(fetchedFilm.genres[0], 'genres', activeGenre)];
                case 2:
                    newFetchedArray = _a.sent();
                    dispatch(actions_1.putFetchedArrayToStore(newFetchedArray.data));
                    return [2 /*return*/];
            }
        });
    }); };
    var sortingResults = function (sort, setting, data) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch(actions_1.changeTypeOfResultsSorting(sort));
                    return [4 /*yield*/, fetchService_1.fetchData(data, setting, sort)];
                case 1:
                    response = _a.sent();
                    dispatch(actions_1.putFetchedArrayToStore(response.data));
                    setActive(sort);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (resultsCount > 0 && !hasOpened) {
            setHeaderType(1);
        }
        else if (hasOpened) {
            setHeaderType(2);
        }
        else {
            setHeaderType(0);
        }
        if (resultsCount > 0 && active === 'release_date') {
            setSortVision(1);
        }
        else if (resultsCount > 0 && active === 'vote-average') {
            setSortVision(2);
        }
        else {
            setSortVision(0);
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(results_header_1.ResultsHeader, { resultsCount: resultsCount, searchData: searchData, searchSetting: searchSetting, openedFilmsGenre: openedFilmsGenre, headerType: headerType, sortingResults: sortingResults, sortVision: sortVision }),
        React.createElement(results_body_container_1.ResultsBodyContainer, { fetchingAllFilms: fetchingAllFilms, searchSetting: searchSetting, active: active, fetchedData: fetchedData, fetchingFilm: fetchingFilm })));
};
exports.Results = Results;
//# sourceMappingURL=results.js.map