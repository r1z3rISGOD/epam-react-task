import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./component/App/App";

import {rootReducer} from "./store/redusers";

export const ACTION_CHANGE_SEARCH_DATA = "ACTION_CHANGE_FIRST_NAME";
export const ACTION_CHANGE_SEARCH_SETTING = "ACTION_CHANGE_SECOND_NAME";

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.querySelector("#root"));
