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
exports.ResultsBodyContainer = void 0;
var React = require("react");
var react_1 = require("react");
var results_body_1 = require("../results-body");
require("./results-body-container.scss");
var results_item_1 = require("../results-item");
var fetchService_1 = require("../../services/fetchService");
var react_router_1 = require("react-router");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../../store/actions");
var ResultsBodyContainer = function (_a) {
    var fetchedData = _a.fetchedData, active = _a.active, searchSetting = _a.searchSetting;
    var dispatch = react_redux_1.useDispatch();
    var location = react_router_1.useLocation().search;
    react_1.useEffect(function () {
        var fetching = function () { return __awaiter(void 0, void 0, void 0, function () {
            var params, searchRequest, newFetchedFilms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = new URLSearchParams(location);
                        searchRequest = params.getAll('request')[0];
                        if (!(fetchedData.length === 0 && searchRequest)) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetchService_1.fetchData(searchRequest, searchSetting, active)];
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
        fetching();
    });
    if (fetchedData.length === 0) {
        return (React.createElement("div", { className: "results-body-container" },
            React.createElement(results_body_1.ResultsBody, null,
                React.createElement("div", { className: "results-body__no-films" },
                    React.createElement("span", { className: "results-body__text" }, " No films found ")))));
    }
    return (React.createElement("div", { className: "results-body-container" },
        React.createElement(results_body_1.ResultsBody, null,
            React.createElement("div", { className: "results-body__films" }, fetchedData.map(function (film) {
                return React.createElement(results_item_1.ResultsItem, { active: active, title: film.title, key: film.id, year: film.release_date, picture: film.poster_path, genres: film.genres, id: film.id });
            })))));
};
exports.ResultsBodyContainer = ResultsBodyContainer;
//# sourceMappingURL=results-body-container.js.map