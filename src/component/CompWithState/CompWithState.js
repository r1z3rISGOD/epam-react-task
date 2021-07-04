import React from "react";

class WithState extends React.Component {
    state =
        { count: 0 }
    changeState = () =>
    { const num = 5; this.setState(
        {count: num}
    );
    }
    changeStateAgain = () =>
    { const num = 0; this.setState(
        {count: num}
    );
    }
    render()
    { return( <div> <h1>State of this Component:
            {this.state.count}
        </h1>
            <button onClick={this.changeState}>Change state</button>
            <button onClick={this.changeStateAgain}>Change state back</button>
        </div>
    )
    }
}

export default WithState;
