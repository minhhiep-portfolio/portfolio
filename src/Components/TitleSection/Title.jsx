import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TitleStyle from "./../../Assets/Jss/Components/TitleSectionStyle";
import { Typography } from "@material-ui/core";

const TitleSection = (props) => {
    let { classes, titleText } = props;
    return (
        <Typography 
            variant="display1" 
            color="primary" 
            className={classes.Typography}
        >
            {titleText}
        </Typography>
    );
}

export default withStyles(TitleStyle)(TitleSection);