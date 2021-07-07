import {ACTION_CHANGE_SEARCH_DATA, ACTION_CHANGE_SEARCH_SETTING, ACTION_CHANGE_RESULTS_SORT} from "../index";

const initialState = {
    searchData: "",
    searchSetting: "TITLE",
    resultsCount: 2,
    resultsSort: "rating"
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_SEARCH_DATA:
            return {...state, searchData: action.payload};

        case ACTION_CHANGE_SEARCH_SETTING:
            return {...state, searchSetting: action.payload};

        case ACTION_CHANGE_RESULTS_SORT:
            return {...state, resultsSort: action.payload}
    }

    return state;
}
