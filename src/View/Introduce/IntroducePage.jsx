import React from "react";
import Introduce from "../../Components/ContentRight/Introduce/Introduce";
import { Grid } from "@material-ui/core";
import TitleSection from "./../../Components/TitleSection/Title";
import Avatar from "../../Components/ContentRight/Introduce/Avatar";

const IntroducePage = (props) => {
    return (
        <div id="introduce">

        <Grid 
            container 
            justify={"center"} 
            style={{ padding: "7rem 3rem", height: "100vh", overflowY: "auto" }}
        >
            <Grid item xs={10}>
                <TitleSection
                    titleText="About Me."
                />
            </Grid>
            <Grid item xs={10} style={{ textAlign : "center" }}>
                <Avatar />
                <Introduce />
            </Grid>
        </Grid>
        </div>

    );
}

export default IntroducePage;