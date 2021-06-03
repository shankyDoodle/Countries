import React from "react";
import connect from "react-redux/es/connect/connect";
import "./style-country-detail-view.scss"
import Typography from "@material-ui/core/Typography/Typography";
import {handleCardClicked} from "../../actions";
import Button from "@material-ui/core/Button/Button";
import Fab from "@material-ui/core/Fab/Fab";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class CountryDetailView extends React.Component {

    handleBorderCountryClicked = () => {
        this.props.dispatch(handleCardClicked(this.props.alpha3Code));
    };

    getBorderCountryButton = () => {
        let countryMap = {};
        this.props.countryData.forEach(country => {
            countryMap[country["alpha3Code"]] = country;
        });
        return (
            this.props.borders.map(border => {
                return <Button size={"sm"}
                               onClick={this.handleBorderCountryClicked.bind(this, border)}>
                    {countryMap[border]}
                </Button>
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
                    <Button variant="contained" color="primary">
                        <ArrowBackIcon/>
                        Back
                    </Button>
                </div>
                <div className={"info-wrapper"}>
                    <div className={"flag"}><img src={this.props.flag}/></div>
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
                        {/*<div className={"border-countries"}>*/}
                        {/*<Typography variant="body2" color="textSecondary" component="div">*/}
                        {/*<b> Top Level Domain: </b>*/}
                        {/*</Typography>*/}
                        {/*{this.getBorderCountryButton()}*/}
                        {/*</div>*/}

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