import React, { Component } from "react";
import CompWithState from "../CompWithState/CompWithState";
import Hello from '../Component/Hello'
import FuncComponent from "../FuncComponent/FuncComponent";
import PureComp from "../PureComp/PureComp";

class App extends Component {
    render() {
        return (
            <div>
                <CompWithState/>
                <Hello/>
                <FuncComponent/>
                <PureComp/>
            </div>
        );
    }
}
export default App;
