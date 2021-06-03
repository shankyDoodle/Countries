import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";

import {setScreenLoader, toggleAppTheme} from "../actions";


class AppHeader extends React.Component {
    toggleAppTheme = () => {
        this.props.dispatch(setScreenLoader(true))
        this.props.dispatch(toggleAppTheme());
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Where in the world?</Typography>
                    <div className={"theme-toggle"}>
                        <Tooltip title={"Change theme"}>
                            <IconButton onClick={this.toggleAppTheme}><Brightness4Icon/></IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

AppHeader.propTypes = {
    children: PropTypes.node
};

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(AppHeader);
export default ConnectedView