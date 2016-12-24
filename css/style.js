import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "modalContainer": {
        "backgroundColor": "rgba(0, 0, 0, 0.3)",
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "top": 0,
        "left": 0,
        "zIndex": 10000,
        "backgroundImage": "url(tp.png)"
    },
    "alertBox": {
        "position": "relative",
        "width": 300,
        "minHeight": 100,
        "marginTop": 50,
        "border": "1px solid #666",
        "backgroundColor": "#fff",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "20px 30px"
    },
    "modalContainer > alertBox": {
        "position": "fixed"
    },
    "alertBox h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "font": "bold 0.9em verdana,arial",
        "backgroundColor": "#3073BB",
        "color": "#FFF",
        "borderBottom": "1px solid #000",
        "paddingTop": 2,
        "paddingRight": 0,
        "paddingBottom": 2,
        "paddingLeft": 5
    },
    "alertBox p": {
        "font": "0.7em verdana,arial",
        "height": 50,
        "paddingLeft": 5,
        "marginLeft": 55
    },
    "alertBox closeBtn": {
        "display": "block",
        "position": "relative",
        "marginTop": 5,
        "marginRight": "auto",
        "marginBottom": 5,
        "marginLeft": "auto",
        "paddingTop": 7,
        "paddingRight": 7,
        "paddingBottom": 7,
        "paddingLeft": 7,
        "border": "0 none",
        "width": 70,
        "font": "0.7em verdana,arial",
        "textTransform": "uppercase",
        "textAlign": "center",
        "color": "#FFF",
        "backgroundColor": "#357EBD",
        "borderRadius": 3,
        "textDecoration": "none"
    },
    "mContainer": {
        "position": "relative",
        "width": 600,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "borderTop": "2px solid #000",
        "borderBottom": "2px solid #000",
        "font": "0.7em verdana,arial"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "font": "bold 1.5em verdana",
        "borderBottom": "1px solid #000"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "font": "bold 1.5em verdana",
        "borderBottom": "1px solid #000"
    },
    "code": {
        "fontSize": 1.2,
        "color": "#069"
    },
    "credits": {
        "position": "relative",
        "marginTop": 25,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 350,
        "font": "0.7em verdana",
        "borderTop": "1px solid #000",
        "borderBottom": "1px solid #000",
        "height": 90,
        "paddingTop": 4
    },
    "credits img": {
        "float": "left",
        "marginTop": 5,
        "marginRight": 10,
        "marginBottom": 5,
        "marginLeft": 0,
        "border": "1px solid #000000",
        "width": 80,
        "height": 79
    },
    "important": {
        "backgroundColor": "#F5FCC8",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "code span": {
        "color": "green"
    }
});