import React from "react";
import SkillStyle from "./../../../Assets/Jss/Components/SkillStyle";
import { withStyles } from "@material-ui/core/styles";

const SkillItem = (props) => {
    let { classes, skill } = props;
    return (
        <div className={classes.oneBlockSkill}>
            <div 
                className={classes.progressBar} 
                style={{ width: skill.percent }}
            >
                <div className={classes.skillName}>
                    <i className={skill.icon}></i>
                    <span className={classes.skillNameSpan}>{skill.name}</span>
                </div>
                <div className={classes.percent}>{skill.percent}</div>
            </div>
        </div>
    );
}

export default withStyles(SkillStyle)(SkillItem);