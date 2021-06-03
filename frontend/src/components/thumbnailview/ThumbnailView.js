import React from "react";
import connect from "react-redux/es/connect/connect";
import "./style-thumbnail-view.scss"
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import {handleCardClicked} from "../../actions";

class ThumbnailView extends React.Component {

    handleCardClicked = () => {
        this.props.dispatch(handleCardClicked(this.props.alpha3Code));
    };

    render() {
        const countryLabelStyle = {
            maxHeight: "2rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }
        return (
            <div className={"thumbnail-wrapper"}>
                <Card>
                    <CardActionArea onClick={this.handleCardClicked}>
                        <CardMedia component="img" src={this.props.flag} style={{height: "10rem"}}/>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h6" style={countryLabelStyle}>{this.props.name}</Typography>
                            <Typography variant="body2" color="textSecondary" component="div">
                                <b> Population: </b> {this.props.population}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div">
                                <b> Region: </b> {this.props.region}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="div">
                                <b> Capital: </b> {this.props.capital}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const ConnectedView = connect(mapStateToProps, null)(ThumbnailView);
export default ConnectedView