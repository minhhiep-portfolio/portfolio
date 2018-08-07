import helpers from "./../Helpers";
const drawerWidth = 300;
export default (theme) => ({
    transparent: {
        backgroundColor: "transparent"
    },
    fixed: {
        ...helpers.PosiTopLeft("fixed", 0, 0),
        zIndex: 11,
        width: "50%",
        '@media (max-width: 959px)': {
            width: "100%",
        },
        '@media (min-width: 960px)': {
            background : "transparent !important"
        }
    },
    ticky : {
        background : "#3f51b5"
    },
    transition: {
        transition : ".4s all"
    },
    flex: {
        ...helpers.flex("space-between", "center")
    },
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    }
});

