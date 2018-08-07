import  React from "react";
import ArrowNextIcon from "@material-ui/icons/ArrowForward";
import {
    IconButton
} from "@material-ui/core";
import {
    withStyles
} from "@material-ui/core";
const  styles = () => ({
    Button : {
        position: "absolute",
        top: "50%",
        transition : ".4s"
    },
})
const NextArrow = (props) => {
    const { classes, onClick } = props;
    return (
        <IconButton
            color={"primary"}
            onClick={onClick}
            className={classes.Button}
            style={{ right : "-40px" }}
        >
            <ArrowNextIcon />
        </IconButton >
    );
}

export default withStyles(styles)(NextArrow );
