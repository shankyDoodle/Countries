import React from 'react'
import {connect} from "react-redux";


class App extends React.Component {
    render() {
        return(
            <div className={"appContainer"}>
                Hello
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(App);
export default ConnectedView