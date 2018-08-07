import React from "react";
import TitleSection from "./../../Components/TitleSection/Title";
import { Grid } from "@material-ui/core"
import ListProjects from "./../../Components/ContentRight/Project/ListProjects";

const ProjectPage = (props) => {
    return (
        <div style={{ padding: "40px 0", height: "100vh" }} id="project">
            <Grid container style={{ height: "100%" }} justify={"center"}>
                <Grid item xs={10} sm={8} style={{ margin: "auto" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TitleSection
                                titleText="My Projects"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ListProjects />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default ProjectPage;