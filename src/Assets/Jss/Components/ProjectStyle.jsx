import helpers from "./../Helpers";
export default {
    oneBLockProject : {
        cursor : "pointer",
        overflow : "hidden",
        marginBottom : "4rem"
    },
    srcImg : {
        width : "100%",
        ...this.overflow,
    },
    srcImg__Img : {
        maxWidth : "100%"
    },
    content : {
        ...helpers.flex("space-between", "center")
    }
}