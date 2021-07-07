import {ACTION_CHANGE_SEARCH_DATA, ACTION_CHANGE_SEARCH_SETTING} from "../index";

export const changeSearchData = () => {
    const newSearchData = document.querySelector('.search__input');
    return {
        type: ACTION_CHANGE_SEARCH_DATA,
        payload: newSearchData.value
    }
}

export const changeSearchSetting = () => {
    const newSearchSetting = document.querySelector('.search-filter__button-active')
    return {
        type: ACTION_CHANGE_SEARCH_SETTING,
        payload: newSearchSetting.value
    }
}
