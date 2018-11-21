import React from "react";
import LinkItem from "./LinkItem";
import { withStyles } from "@material-ui/core/styles";
import linkStyle from "./../../../Assets/Jss/Components/ButtonLinkHeaderStyle";
import cn from "classnames";

const ListLinkItems = [
    {
        to: "/",
        exact: true,
        text: "About Me",
    },
    {
        to: "/project",
        exact: false,
        text: "Project",

    },
    {
        to: "/skill",
        exact: false,
        text: "Skills",
    },
    // {
    //     to: "/contact",
    //     exact: false,
    //     text: "Contact",
    //     scrollTo : "#contact",
    // },
];

class ListLink extends React.Component {
    render() {
        let  { classes, responsive } = this.props;
        let check = responsive ? `${classes.listLink}` : '';
        return (
            <ul className={cn(check)} >
                {this.showListLink(ListLinkItems, classes, responsive)}
            </ul>
        );
    }   
    showListLink = (links, classes, responsive) => {
        let res = null;
        if (links.length > 0) {
            res = links.map((link, index) => {
                return (responsive) ? (
                    <LinkItem 
                        key={index} 
                        link={link}
                        linkItem={classes.linkItem}
                        closeDrawer={this.props.closeDrawer}
                    />
                )
                : (
                    <LinkItem 
                        key={index} 
                        link={link}
                    />
                );
            })
        }
        return res;
    }
}

export default withStyles(linkStyle)(ListLink);