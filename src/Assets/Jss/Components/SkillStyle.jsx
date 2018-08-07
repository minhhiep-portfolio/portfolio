import helpers from "./../Helpers";

export default  {
    background : {
        background : "gray"
    },
    size : {
        ...helpers.size("100%", "100vh")
    },
    relative : {
        position : "relative"
    },
    oneBlockSkill : {
        overflow: "visible",
        marginTop: "20px",
        boxShadow: "none",
        background: "#eee",
        padding: "0px",
        height: "12px",
        borderRadius: "6px",
        marginBottom : "65px",
        fontFamily : "trade-bold",
    },
    progressBar: {
        position: "relative",
        textAlign: "left",
        borderRadius: "10px",
        lineHeight: "30px",
        marginLeft: "-1px",
        boxShadow: "none",
        height : "100%",
        backgroundColor: "#3f51b5"
    },
    percent : {
        ...helpers.size("36px", "36px"),
        ...helpers.PosiTopRight("absolute", "50%", "-1px"),
        background: "#fff",
        fontSize: "11px",
        zIndex: 10,
        transform: "translateY(-50%)",
        border:" 2px solid #3f51b5",
        borderRadius: "50%",
        textAlign: "center",
        color: "#3f51b5"
    },
    skillName : {
        ...helpers.PosiTopLeft("absolute", "-37px", "6px"),
        ...helpers.flex("flex-start", "center"),
        fontSize: "30px",
    },
    skillNameSpan : {
        fontSize : "1rem",
        marginLeft : 13,
        color : "#000"
    }
}