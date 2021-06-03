import React from 'react'
import {connect} from "react-redux";

import "./style-custom-tools.scss"
import TextField from "@material-ui/core/TextField/TextField";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {handleSearchKeyChange, handleRegionChanged} from "../../actions/index";
import Typography from "@material-ui/core/Typography/Typography";

class CustomTools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: ""
        };
    }

    handleSearchKeyChange = (e) => {
        this.setState({searchKey: e.target.value});
    };

    handleSearchKeyBlur = () => {
        this.props.dispatch(handleSearchKeyChange(this.state.searchKey));
    };

    handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            this.props.dispatch(handleSearchKeyChange(this.state.searchKey));
        }
    };

    handleRegionChange = (e) => {
        this.props.dispatch(handleRegionChanged(e.target.value));
    };

    render() {
        return (
            <div className={"custom-tool-wrapper"}>
                <div className={"search-container"}>
                    <TextField id={"search-input"}
                               placeholder="Search for a country..."
                               variant="outlined"
                               onChange={this.handleSearchKeyChange}
                               onKeyDown={this.handleKeyDown}
                               onBlur={this.handleSearchKeyBlur}
                               value={this.state.searchKey}/>
                </div>
                <div id={"select-container"}>
                    <Typography variant="body2" color="textSecondary" component="div">
                        Filter By Region:
                    </Typography>
                    <Select id="region-select"
                            labelId="select-outlined-label"
                            variant={"outlined"}
                            value={this.props.selectedRegion}
                            label="Filter By Region"
                            displayEmpty
                            onChange={this.handleRegionChange}>
                        <MenuItem value={""}>All</MenuItem>
                        <MenuItem value={"africa"}>Africa</MenuItem>
                        <MenuItem value={"americas"}>Americas</MenuItem>
                        <MenuItem value={"asia"}>Asia</MenuItem>
                        <MenuItem value={"europe"}>Europe</MenuItem>
                        <MenuItem value={"oceania"}>Oceania</MenuItem>
                    </Select>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(CustomTools);
export default ConnectedView