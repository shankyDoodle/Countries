import React from 'react'
import {connect} from "react-redux";
import AppHeader from "./AppHeader"
import AppDetails from "./appdetails/AppDetails"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

import {
    common,
    grey
} from "@material-ui/core/colors";

import {fetchAllCountryData} from "../actions";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";

class App extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchAllCountryData())
    }

    render() {
        const mainPrimaryColor = this.props.appTheme === "dark" ? grey[900] : common.white;
        const mainSecondaryColor = this.props.appTheme === "dark" ? grey[900] : common.white;

        const darkTheme = createMuiTheme({
            palette: {
                type: this.props.appTheme,
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
                <CssBaseline />
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