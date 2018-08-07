import React from 'react';
import ProjectItem from './ProjectItem';
import dataProjects from "./../../../Data/ListProject.json";
import Loading from "./../../Loading/Loading";

const ListProjects = () => {
    return (
        <div style={{ backgroundColor: "transparent",width: "100%" }}>
            {showProjects(dataProjects)}
        </div>
    );
}
const showProjects = (projects) => {
    let res = <Loading />;
    if(projects.length > 0){
        res = projects.map(project => {
            return (
                <ProjectItem 
                    key={project.Id}                
                    project={project}
                />
            )
        })
    }
    return res;
}

export default ListProjects;