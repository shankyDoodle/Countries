import React from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

export default function AppHeader(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Where in the world?
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

AppHeader.propTypes = {
    children: PropTypes.node
};
