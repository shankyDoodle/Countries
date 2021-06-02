import React from 'react'
import {connect} from "react-redux";

import "./style-custom-tools.scss"
import TextField from "@material-ui/core/TextField/TextField";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {handleSearchKeyChange, handleRegionChanged} from "../../actions/index";

class CustomTools extends React.Component {
    handleSearchKeyBlur = (e) => {
        this.props.dispatch(handleSearchKeyChange(e.target.value));
    };

    handleRegionChange = (e) => {
        this.props.dispatch(handleRegionChanged(e.target.value));
    };

    render() {
        return (
            <div className={"custom-tool-wrapper"}>
                <TextField id="search-input"
                           placeholder="Outlined"
                           variant="outlined"
                           onChange={this.handleSearchKeyBlur}
                           value={this.props.searchKey}/>
                <Select
                    id="region-select"
                    value={this.props.selectedRegion}
                    label="Age"
                    placeholder={"Filter By Region"}
                    onChange={this.handleRegionChange}
                >
                    <MenuItem value=""><em>All</em></MenuItem>
                    <MenuItem value={"africa"}>Africa</MenuItem>
                    <MenuItem value={"americas"}>Americas</MenuItem>
                    <MenuItem value={"asia"}>Asia</MenuItem>
                    <MenuItem value={"europe"}>Europe</MenuItem>
                    <MenuItem value={"oceania"}>Oceania</MenuItem>
                </Select>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(CustomTools);
export default ConnectedView