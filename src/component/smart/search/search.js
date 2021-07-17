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
exports.Search = void 0;
var React = require("react");
var react_1 = require("react");
var search_input_1 = require("../../dumb/search-input");
var search_heading_find_1 = require("../../dumb/search-heading-find/search-heading-find");
var search_settings_1 = require("../../dumb/search-settings");
var search_heading_netflix_1 = require("../../dumb/search-heading-netflix");
require("./search.scss");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var actions_1 = require("../../../store/actions");
var fetchService_1 = require("../../services/fetchService");
var Search = function (_a) {
    var resultsSort = _a.resultsSort;
    var _b = react_1.useState(''), request = _b[0], setRequest = _b[1];
    var _c = react_1.useState('title'), setting = _c[0], setSetting = _c[1];
    var history = react_router_dom_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var fetchingAllFilms = function (request, setting, sort) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchService_1.fetchData(request, setting, sort)];
                case 1:
                    response = _a.sent();
                    dispatch(actions_1.changeSearchRequestedData(request));
                    dispatch(actions_1.changeTypeOfSearch(setting));
                    dispatch(actions_1.putFetchedArrayToStore(response.data));
                    history.push("/search/?request=" + request);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "search" },
        React.createElement(search_heading_find_1.SearchHeadingFind, null,
            React.createElement(search_heading_netflix_1.SearchHeadingNetflix, null)),
        React.createElement(search_input_1.SearchInput, { setRequest: setRequest, request: request, setting: setting, resultsSort: resultsSort, fetchingAllFilms: fetchingAllFilms }),
        React.createElement(search_settings_1.SearchSettings, { resultsSort: resultsSort, request: request, setSetting: setSetting, setting: setting, fetchingAllFilms: fetchingAllFilms })));
};
exports.Search = Search;
//# sourceMappingURL=search.js.map