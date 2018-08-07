import helpers from "./Helpers";
export default {
    size : {
        ...helpers.size("100%", "100vh")
    },
    background : {
        background : "url('https://images.pexels.com/photos/102542/nature-landscape-night-stars-102542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat center center",
        backgroundSize: "cover"
    },
    flex : {
       ...helpers.flex("center", "center")
    },
    position: {
        position: "relative"
    }

}
