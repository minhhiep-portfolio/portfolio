import helpers from './../Helpers';
import Fonts from "./../Base/font";

export default {
    flex : {
        ...helpers.flex("center", "center")
    },
    relative : {
        position : "relative"
    },
    GridItem : {
        zIndex : 2,
        textAlign : "center"
    },
    overlay : {
        ...helpers.size("100%", "100%"),
        background : "rgba(0,0,0,.76)",
        ...helpers.PosiTopRight("absolute", 0, 0),
        zIndex : 1
    },
    background : {
        background : `url(${process.env.PUBLIC_URL}/Images/bg-home.jpeg) fixed no-repeat center center`,
        backgroundSize: "cover",
    },
    size : {
        ...helpers.size("100%", "100vh")
    },
    Typography : {
        color : "#fff",
        fontFamily : Fonts.fontTradeBold.fontFamily
    },
    Button : {
        color : "#fff",
        borderColor: "#fff",
        marginTop : 21,
    }
}
