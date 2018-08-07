import React from "react";
import HomeStyle from "./../../../Assets/Jss/Components/HomeStyle";
import cn from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typed from 'react-typed';
import {
    Grid,
    Typography,
} from "@material-ui/core";

const Home = (props) => {
    let cl = props.classes;
        return (
            <div className={cn(cl.background, cl.size)}>
                <Grid container className={cn(cl.flex, cl.relative)} style={{ height: "100vh" }}>
                    <div className={cl.overlay} ></div>
                    <Grid item xs={10} sm={8} className={cl.GridItem}>
                        <Typography variant="display1" className={cl.Typography}>
                            <Typed
                                strings={
                                    [
                                        `<small>I'M</small> NGUYEN MINH HIEP`,
                                        `<small>I'M</small> A WEB DESIGNER`
                                    ]
                                }
                                typeSpeed={80}
                                backSpeed={50}
                                loop >
                            </Typed>
                        </Typography>
                    </Grid>
                </Grid>
            </div>

        );
}
export default withStyles(HomeStyle)(Home);