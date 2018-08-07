import React from "react";
import Typed from 'react-typed';
import { withStyles, Typography } from '@material-ui/core';
import NotFoundStyle from "./../../Assets/Jss/Components/NotFound";
const NotFoundPage = (props) => {
    const { classes } = props;
    return (
        <div className={classes.divNotFound}>
            <Typography variant="display1">
                <Typed
                    strings={
                        [
                            `Not Found`
                        ]
                    }
                    typeSpeed={80}
                    backSpeed={500} >
                </Typed>
            </Typography>
        </div>
    );
}

export default withStyles(NotFoundStyle)(NotFoundPage);