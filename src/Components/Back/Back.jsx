import React from "react";
import { withRouter } from "react-router-dom";
import ArrowPrevIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";

const Back = ({ history }) => {
    return (
            <div style={{ position: "absolute" }}>
                {
                    (history.length > 1 && history.location.pathname !== "/") &&
                    (<IconButton
                        onClick={history.goBack}
                        color="primary"
                    >
                        <ArrowPrevIcon />
                    </IconButton >)
                }
                {
                    (history.location.pathname === "/") &&
                    (<IconButton
                        color="primary"
                        disabled
                    >
                        <ArrowPrevIcon />
                    </IconButton >)
                }
            </div>

    );
}

export default withRouter(Back);