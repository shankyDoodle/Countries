import React from "react";
import "./style-app-details.scss"

import CustomTools from "../customtools/CustomTools";
import connect from "react-redux/es/connect/connect";
import ThumbnailView from "../thumbnailview/ThumbnailView";
import CountryDetailView from "../countrydetailview/CountryDetailView";

class AppDetails extends React.Component {
    getThumbnails = () => {
        return this.props.countryData.map((country, i) => <ThumbnailView key={i} {...country}/>);
    };

    getActiveCountryView = () => {
        return <CountryDetailView {...this.props.activeCountry} countryData={this.props.countryData}/>;
    };

    getAllCountriesView = () => {
        return <>
            <div className={"tools-wrapper"}>
                <CustomTools/>
            </div>
            <div className={"thumbnails-wrapper"}>
                {this.getThumbnails()}
            </div>
        </>
    };

    render() {

        return (
            <div className={"app-details-wrapper"}>
                {this.props.activeCountry ? this.getActiveCountryView() : this.getAllCountriesView()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(AppDetails);
export default ConnectedView