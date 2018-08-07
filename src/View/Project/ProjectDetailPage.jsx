import React from "react";
import dataProjects from "./../../Data/ListProject.json";
import Loading from "../../Components/Loading/Loading";
import ProjectDetail from "../../Components/ContentRight/Project/ProjectDetail";
const ProjectDetailPage = (props) => {
    let { id } = props.match.params;
    id = Number(id);
    return (
        <div id="project">
            {findDetailMovie(id,dataProjects)}
        </div>
    );
}
const findDetailMovie = (id, projects) => {
    let res = null;
    if(id !== null){
        res = projects.filter(project => id === project.Id)
    }
    return (res === null) 
    ? (
        <Loading />
    ) 
    : (
        <ProjectDetail projectInfo={res[0]}/>
    );
}

export default ProjectDetailPage;