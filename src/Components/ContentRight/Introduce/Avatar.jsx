import React from "react";
import IntroduceStyle from "../../../Assets/Jss/Components/IntroduceStyle";
import { withStyles } from "@material-ui/core/styles";
const Avatar = (props) => {
    let { classes } = props;
    return (
        <div className={classes.divAvatar}>
            <img className={classes.sizeImg} src={`${process.env.PUBLIC_URL}/Images/avatar.jpg`} alt=""/>
        </div>
    );
}

export default withStyles(IntroduceStyle)(Avatar);