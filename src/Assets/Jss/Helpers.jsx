export default {
    flex : (justifyContent, alignItems) => ({ display : "flex", justifyContent, alignItems }),
    BoxModel : (padding, margin) => ({ padding,margin }),
    size : (width, height) => ({ width, height }),
    minSize : (minWidth, minHeight) => ({ minWidth, minHeight }),
    PosiTopLeft: (position, top, left) => ({position, top, left}),
    PosiTopRight: (position, top, right) => ({position, top, right}),
    hidden : (opacity, visibility) => ({ opacity, visibility }),
    background : (background) => ({ background }),
    transition : (transition) => ({ transition }),
}