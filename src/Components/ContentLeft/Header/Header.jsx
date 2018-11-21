import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Hidden,
    Drawer,
    IconButton,
} from "@material-ui/core";
import cn from "classnames";
import withWidth from "@material-ui/core/withWidth";
import compose from 'recompose/compose';
import { withStyles } from "@material-ui/core/styles";
import HeaderStyles from "./../../../Assets/Jss/Components/HeaderStyle";
import ListLink from "./ListLink";
import MenuIcon from '@material-ui/icons/Menu';


class Header extends React.Component {
    state = {
        mobileOpen: false,
        lastScrollY: 0,
        ticky: false,
        Y : 100
    };
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    componentDidMount() {
        window.addEventListener("scroll", this.scrollPage);
    }
    scrollPage = () => {
        let { lastScrollY } = this.state;
        this.setState({ 
            lastScrollY: window.scrollY, 
            ticky: (lastScrollY < this.state.Y ) ? false : true
        })
        // this.setState({ ticky: (lastScrollY < this.state.Y ) ? false : true })
    }
    addClassAppBar = (classes, ArrayClass=[],classtoAdd, dk) => {
        if(dk) classtoAdd.map(cl => ArrayClass.push(cl))
        return [...classes, ...ArrayClass];
    }
    render() {
        let { classes } = this.props;
        let { mobileOpen, ticky } = this.state;
        let AppBarClassName = this.addClassAppBar(
            [classes.transparent, classes.fixed], 
            [] ,
            [classes.ticky, classes.transition], 
            ticky
        );
        return (
            <AppBar className={cn(AppBarClassName)}>
                <Toolbar
                    variant="dense"
                    className={classes.flex}
                >
                    <Typography variant="title" color="inherit">
                        CV
                    </Typography>

                    <Hidden only={["xs", "sm"]}>
                        <ListLink />
                    </Hidden>

                    <Hidden only={["md", "lg", "xl"]}>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            onClick={this.handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <Hidden only={["md", "lg", "xl"]}>
                        <Drawer
                            variant="temporary"
                            anchor={"left"}
                            open={mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            <ListLink 
                                responsive={true}
                                closeDrawer={this.closeDrawer}
                            />
                        </Drawer>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
    closeDrawer = () => {
        this.setState({ mobileOpen: false });
        window.scroll({
            top: 2000,
            left: 0,
            behavior: 'smooth'
        });
    }
}
export default compose(
    withStyles(HeaderStyles, { withTheme: true }),
    withWidth()
)(Header);