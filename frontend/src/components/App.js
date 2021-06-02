import React from 'react'
import {connect} from "react-redux";
import AppHeader from "./AppHeader"
import AppDetails from "./AppDetails"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

import {
    common,
    grey
} from "@material-ui/core/colors";

import {fetchAllCountryData} from "../actions";

class App extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchAllCountryData())
    }

    render() {
        const palletType = !true ? "dark" : "light";
        const mainPrimaryColor = !true ? grey[900] : common.white;
        const mainSecondaryColor = !true ? grey[900] : common.white;

        const darkTheme = createMuiTheme({
            palette: {
                type: palletType,
                primary: {
                    main: mainPrimaryColor
                },
                secondary: {
                    main: mainSecondaryColor
                }
            }
        });
        return (
            <ThemeProvider theme={darkTheme}>
                <div className={"appContainer"}>
                    <AppHeader/>
                    <AppDetails/>
                </div>
            </ThemeProvider>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(App);
export default ConnectedView