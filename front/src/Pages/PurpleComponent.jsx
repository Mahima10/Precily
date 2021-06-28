import React from "react";
import { Rnd } from "react-rnd";
const { innerWidth: width, innerHeight: height } = window;

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 5px purple",
    background: "#f0f0f0"
};

function PurpleComponent({data}) {
    return (
        <Rnd
            style={style}
            default={{
                x: 0,
                y: 60/100 * height,
                width:  89/100 * width,
                height: 25/100 * height
            }}
        >
            {data}
        </Rnd>
    );
}

export default PurpleComponent;