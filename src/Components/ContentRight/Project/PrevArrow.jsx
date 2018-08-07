import  React from "react";
import ArrowPrevIcon from "@material-ui/icons/ArrowBack";
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
const PrevArrow = (props) =>  {
    const { classes, onClick } = props;
    return (
        <IconButton
            color={"primary"}
            onClick={onClick}
            className={classes.Button}
            style={{ left : "-40px" }}
        >
            <ArrowPrevIcon />
        </IconButton >
    );
}
export default withStyles(styles)(PrevArrow);
