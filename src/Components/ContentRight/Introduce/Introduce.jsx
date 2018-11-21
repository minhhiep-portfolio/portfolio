import React from "react";
import { 
    Typography, 
    withStyles, 
    List ,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import Done from "@material-ui/icons/Done";
import IntroduceStyle from "./../../../Assets/Jss/Components/IntroduceStyle";

const ListMucTieu_learn = [
    "Seeking a fulltime position in the IT industry",
    "Working as professional Front End developer",
    "Becoming a fullstack developer",
    "Try to learning as much as possible and doing my best to accomplish my mission, coding and keeping up to date with technology",
    "Continue to study Javascript language and master on it."
];
const info = [
    {
        type : "Birthday",
        value : "April 13 1997"
    },
    {
        type : "Place of birth",
        value : "Phan Thiết City"
    },
    {   
        type : "Email",
        value : "hiepminh130497@gmail.com",
    },
    {
        type : "Phone Number",
        value : "0335948121"
    }
]

const Introduce = (props) => {
    let { classes } = props;
    return (
        <React.Fragment>
            <Typography variant="display2" className={classes.Name}>
                Nguyen Minh Hiep
            </Typography>
            <Typography variant="body2" className={classes.Career}>
                Web Designer
            </Typography>
            {showInfo(info, classes)}
            <List
                dense={false}
                subheader={
                    <Typography variant="body2" className={classes.Career} style={{ textAlign : "left", marginBottom : 11, marginLeft : 11 }}>
                        Career Objective : 
                    </Typography>}
            >
                
                {showListMucTieu(ListMucTieu_learn)}
            </List>
        </React.Fragment>
    );
}
const showInfo = (infos, classes) => {
    let res = null;
    if(infos.length > 0){
        res = infos.map((info, index) => {
            return (
                <div className={classes.one_info} key={index}>
                    <Typography variant="body2" className={`${classes.Career} ${classes.CarrerInfo}`}>
                        {info.type} : 
                    </Typography>
                    <Typography variant="body2">{info.value}</Typography>
                </div>
            )
        })
    }
    return res;
}
const showListMucTieu  = (muctieus) => {
    let res = null;
    if(muctieus.length > 0){
        res = muctieus.map((muctieu, index) => {
            return (
                <ListItem key={index}>
                    <ListItemIcon>
                        <Done />
                    </ListItemIcon>
                    <ListItemText primary={muctieu} style={{ textTransform : "capitalize" }}/>
                </ListItem>
            )
        })
    }
    return res;
}

export default withStyles(IntroduceStyle)(Introduce);