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
        background : `url(${window.location.origin}/Images/bg-home.jpeg) fixed`
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
