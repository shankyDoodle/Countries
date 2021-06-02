import React from "react";
import CustomTools from "./customtools/CustomTools";
import connect from "react-redux/es/connect/connect";

class AppDetails extends React.Component {
    getThumbnails = () => {
        let thumbnailView = []
        for (let country of this.props.countryData) {
            thumbnailView.push(<div>
                {country.name}
            </div>);
        }
        return thumbnailView;
    };

    render() {
        return (
            <div className={"app-details-wrapper"}>
                <div className={"tools-wrapper"}>
                    <CustomTools/>
                </div>
                <div className={"thumbnails-wrapper"}>
                    {this.getThumbnails()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(AppDetails);
export default ConnectedView