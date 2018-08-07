import helpers from './../Helpers';
export default  {
    sizeImg : {
        minWidth : "100%",
        maxWidth : "100%",
        boxShadow : "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    divAvatar : {
        ...helpers.flex("center", "center"),
        ...helpers.size(180, 180),
        overflow : "hidden",
        margin : "auto", 
        borderRadius: '50%',
    },
    Name : {
        fontSize : 27,
        fontFamily : "lato-reg",
        margin: "15px 0 20px"
    },
    Career : {
        fontSize: "13px",
        fontWeight: "bold",
        marginBottom : 27
    },
    aboutMySelf : {
        textAlign : "center",
    },
    one_info : {
        ...helpers.flex("space-between", "center"),
        marginBottom : 11
    },
    CarrerInfo : {
        textAlign : "left",
        marginLeft : 11, 
        marginBottom : 0
    }
}
