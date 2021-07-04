import React from "react";
import './PureComp.scss'

class PureComp extends React.PureComponent {
    state = {
        name: "Kirill"
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
    }

    addText = () => {
        const name = "Yurij";
        this.setState({name: name})
    }

    render() {
        return(
            <div>
                <h1 className={'pure'}>{this.state.name}</h1>
                <button onClick={this.addText}>Console log!</button>
        </div>
    )
    }
}

export default PureComp
