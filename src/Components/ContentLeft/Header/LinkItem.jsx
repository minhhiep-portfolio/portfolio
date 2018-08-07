import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { withStyles, Button } from "@material-ui/core";
import ButtonLinkHeaderStyle from "./../../../Assets/Jss/Components/ButtonLinkHeaderStyle";

class LinkItem extends React.Component {
    render() {
        let { link, classes, linkItem } = this.props;
        return (
            <Button
                className={cn(
                    classes.paddingButton, classes.reset,
                    classes.font,
                    classes.color,
                    classes.boxModelLink,
                    linkItem
                )}
                component={NavLink}
                activeClassName={cn(classes.LinkActive)}
                to={`${process.env.PUBLIC_URL}${link.to}`}
                exact={link.exact}
                onClick={this.props.closeDrawer}
            >
                {link.text}
            </Button>
        );
    }
}

export default withStyles(ButtonLinkHeaderStyle)(LinkItem);