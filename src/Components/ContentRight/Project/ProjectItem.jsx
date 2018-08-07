import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    Divider,
    Typography,
    IconButton,
    Tooltip
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import ProjectStyle from "./../../../Assets/Jss/Components/ProjectStyle";
import DetailIcon from "@material-ui/icons/MoreVert";

const slugName = (str) => {
    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
}

const ProjectItem = (props) => {
    const { classes, project } = props;
    const TenProject = slugName(project.Name);
    return (
        <Card className={classes.oneBLockProject}>
            <div className={classes.srcImg}>
                <img
                    className={classes.srcImg__Img}
                    src={`${process.env.PUBLIC_URL}/Images/${project.Image}`} alt=""
                />
            </div>
            <CardContent className={classes.content}>
                <Typography variant="title">
                    {project.Name}
                </Typography>
                <Tooltip title="Detail" placement="top">
                    <IconButton
                        color="primary"
                        component={Link}
                        to={`${process.env.PUBLIC_URL}/ten-project=${TenProject}&id=${project.Id}`}
                    >
                        <DetailIcon />
                    </IconButton>
                </Tooltip>
            </CardContent>
            <Divider light />
        </Card>
    );
}
export default withStyles(ProjectStyle)(ProjectItem);