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
    "Nâng Cao Khả năng tổ chức code css với SMACSS, OOCSS, BEM",
    "hiểu rõ nhất các xử lí bất đồng bộ trong javascript",
    "Tiếp cận Reactjs + Redux",
    "Tìm hiểu sâu về webpack",
    "Học Tiếng Anh"
];
const info = [
    {
        type : "Ngày Sinh",
        value : "13-04-1997 (21 tuổi)"
    },
    {
        type : "Quê Quán",
        value : "Thành Phố Phan Thiết"
    },
    {   
        type : "Email",
        value : "hiepminh130497@gmail.com",
    },
    {
        type : "Số Điện Thoại",
        value : "01635948121"
    }
]

const Introduce = (props) => {
    let { classes } = props;
    return (
        <React.Fragment>
            <Typography variant="display2" className={classes.Name}>
                Nguyễn Minh Hiệp
            </Typography>
            <Typography variant="body2" className={classes.Career}>
                Web Designer
            </Typography>
            {showInfo(info, classes)}
            <List
                dense={false}
                subheader={
                    <Typography variant="body2" className={classes.Career} style={{ textAlign : "left", marginBottom : 11, marginLeft : 11 }}>
                        Mục Tiêu Học Tập Tương Lai : 
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