import helpers from "./../Helpers";

export default {
    CardHeader : {
        ...helpers.BoxModel("20px 0", "0 20px"),
        position: "relative",
        textAlign: "center",
        borderRadius: '.4em',
        bottom : "43px",
        background: '#3f51b5',
        boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
    },
    Typography : {
        color : "#fff",
        fontFamily : "trade-bold",
        fontSize : "25px",
        marginBottom : "1rem"
    },
    socialLink : {
        color : "#fff",
        margin: "0 10px",
        fontSize : "21px",
        textDecoration : "none"
    },
    form : {
        padding: "1rem 1.7rem"
    },
    TextField : {
        width : "100%",
        fontFamily : "trade-bold"
    },
    IconInput : {
        ...helpers.PosiTopRight("absolute", 18, 10)
    }
}
