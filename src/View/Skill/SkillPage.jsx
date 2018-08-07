import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { 
    Grid
} from "@material-ui/core";
import cn from "classnames";
import SkillStyle from "./../../Assets/Jss/Components/SkillStyle";
import TitleSection from "./../../Components/TitleSection/Title";
import SkillList from "../../Components/ContentRight/Skill/SkillList";
const SkillPage = (props) => {
    let { classes } = props;
    return (
        <div  className={cn(classes.size)} style={{ padding: "40px 0" }} id="skill">
            <Grid container style={{ height : "100%" }} justify={"center"}>
                <Grid item xs={10} sm={8} style={{ margin : "auto" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TitleSection 
                                titleText="My Skill"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <SkillList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(SkillStyle)(SkillPage);