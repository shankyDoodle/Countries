import React from "react";
import connect from "react-redux/es/connect/connect";
import "./style-country-detail-view.scss"
import Typography from "@material-ui/core/Typography/Typography";
import {fetchAllCountryData, handleCardClicked} from "../../actions";
import Button from "@material-ui/core/Button/Button";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

class CountryDetailView extends React.Component {

    handleBorderCountryClicked = (alpha3Code) => {
        this.props.dispatch(handleCardClicked(alpha3Code));
    };

    handleBackButtonCLicked = () => {
        this.props.dispatch(fetchAllCountryData());
    };

    getBorderCountryButton = () => {
        let countryMap = {};
        this.props.countryData.forEach(country => {
            countryMap[country["alpha3Code"]] = country;
        });
        const smallButtonStyle = {
            fonSize: "0.5rem",
            width: "1rem",
            padding: "0 5px",
            margin: "2px 5px",
            opacity:"0.5"
        }
        return (
            this.props.borders.map((border, i) => {
                return <Tooltip title={countryMap[border].name} key={i}>
                    <Button size={"small"} variant="contained" color="secondary" style={smallButtonStyle}
                            onClick={this.handleBorderCountryClicked.bind(this, border)}>
                        {border}
                    </Button></Tooltip>
            }))
    };

    render() {

        const countryLabelStyle = {
            maxHeight: "2rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }

        return (
            <div className={"country-details-wrapper"}>
                <div className={"back-button-wrapper"}>
                    <Button variant="contained" color="primary" onClick={this.handleBackButtonCLicked}>
                        <ArrowBackIcon/>
                        Home
                    </Button>
                </div>
                <div className={"info-wrapper"}>
                    <div className={"flag"}><img src={this.props.flag} alt={""}/></div>
                    <div className={"info"}>
                        <div className={"country-label"}>
                            <Typography gutterBottom variant="h5" component="h5"
                                        style={countryLabelStyle}><b>{this.props.name}</b></Typography>
                        </div>
                        <div className={"details"}>
                            <div className={"single-block"}>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                    <b> Native Name: </b> {this.props.nativeName}
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                    <b> Population: </b> {this.props.population}
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                    <b> Region: </b> {this.props.region}
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                    <b> Sub Region: </b> {this.props.subregion}
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                    <b> Capital: </b> {this.props.capital}
                                </Typography>
                            </div>
                            <div className={"single-block"}>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                    <b> Top Level Domain: </b> {this.props.topLevelDomain.join(", ")}
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                    <b> Currencies: </b> {this.props.currencies.map(cur => cur.name).join(", ")}
                                </Typography>
                                <Typography gutterBottom variant="body2" color="textSecondary" component="div">
                                    <b> Languages: </b> {this.props.languages.map(lang => lang.name).join(", ")}
                                </Typography>
                            </div>
                        </div>
                        <div className={"border-countries"}>
                            <Typography variant="body2" color="textSecondary" component="div">
                                <b> Border Countries:</b>
                            </Typography>
                            {this.getBorderCountryButton()}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(CountryDetailView);
export default ConnectedView