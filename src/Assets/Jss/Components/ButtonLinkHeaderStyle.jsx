import helpers from "./../Helpers";
export default {
    reset: {
        textDecoration: "none",
        transition: ".4s",
        borderRadius: "4px"
    },
    listLink: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: 0,
        justifyContent: "center"
    },
    linkItem: {
        ...helpers.BoxModel(0, "10px auto"),
        color: "#000",
        width: "80%",
        minHeight: "40px",
    },
    color: {
        color: "#fff"
    },
    font: {
        fontSize: 11,
    },
    boxModelLink: {
        ...helpers.BoxModel("4px 10px", "0 4px")
    },
    LinkActive: {
        background: "rgb(193, 193, 193, .45)"
    },
}