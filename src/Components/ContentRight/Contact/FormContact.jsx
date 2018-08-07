import React from "react";
import {
    Grid,
    withStyles,
    TextField,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@material-ui/core"
import {
    AccountCircle,
    CreditCard,
    Email
} from '@material-ui/icons';
import FormContactStyle from "./../../../Assets/Jss/Components/FormContactStyle";
const listIcon = [
    {
        link: "https://www.facebook.com/hiep.minh.9693",
        iconName: "devicon-facebook-plain"
    },
    {
        link: "http://www.github.com/hiepminh",
        iconName: "devicon-github-plain"
    },
    {
        link: "#",
        iconName: "devicon-google-plain"
    }
];
const FormContact = (props) => {
    const { classes } = props;
    return (
        <Grid container style={{ height: "100vh", padding : "3rem 0" }}>
            <Grid item xs={10} sm={8} style={{ margin: "auto" }}>
                <Card style={{ overflow: "initial", paddingBottom: "2rem" }}>
                    <div className={classes.CardHeader}>
                        <Typography variant="display1" className={classes.Typography}>
                            Contact Me
                        </Typography>
                        <div className="social">
                            {showSocialIcon(listIcon, classes)}
                        </div>
                    </div>
                    <CardContent>
                        <form className={classes.form}>
                            <div className="oneBlockInput" style={{ position: "relative", marginBottom: "20px" }}>
                                <TextField
                                    label="Your Email..."
                                    className={classes.TextField}
                                />
                                <AccountCircle
                                    className={classes.IconInput}
                                />
                            </div>
                            <div className="oneBlockInput" style={{ position: "relative", marginBottom: "20px" }}>
                                <TextField
                                    label="Your Phone..."
                                    className={classes.TextField}
                                />
                                <CreditCard
                                    className={classes.IconInput}
                                />
                            </div>
                            <div className="oneBlockInput" style={{ position: "relative", marginBottom: "20px" }}>
                                <TextField
                                    label="Your Message..."
                                    multiline
                                    rows="4"
                                    className={classes.TextField}
                                />
                                <Email
                                    className={classes.IconInput}
                                />
                            </div>
                        </form>
                    </CardContent>
                    <CardActions style={{ justifyContent : "center" }}>
                        <Button color="primary" style={{ fontFamily : "trade-bold", fontSize : "1rem", padding : "12px 3rem" }}>
                            Send
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
const showSocialIcon = (icons, classes) => {
    let res = null;
    if (icons.length > 0) {
        res = icons.map((icon, index) => {
            return (
                <a
                    key={index}
                    href={icon.link}
                    target="_blank"
                    className={`${icon.iconName}  ${classes.socialLink}`}>
                </a>);
        })
    }
    return res;
}
export default withStyles(FormContactStyle)(FormContact);