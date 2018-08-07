import React from "react";
import SkillItem from "./SkillItem";
import Skills from "./../../../Data/ListSkills.json";
const SkillList = (props) => {
    return (
        <React.Fragment>
            { showSkills(Skills) }
        </React.Fragment>
    );
}
const showSkills = (skills) => {
    let res = null;
    if(skills.length > 0){
        res = skills.map((skill, index) => {
            return (
                <SkillItem 
                    key={index}
                    skill={skill}
                />
            )
        })
    }
    return res;
}

export default SkillList;
