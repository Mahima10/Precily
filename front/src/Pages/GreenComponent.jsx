import React from "react";
import { Rnd } from "react-rnd";
const { innerWidth: width, innerHeight: height } = window;

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 5px green",
    background: "#f0f0f0"
};

function GreenComponent({data}) {
    return (
        <Rnd
            style={style}
            default={{
                x: 39/100 * width,
                y: 0,
                width: (50/100) * width,
                height: 5/10 * height
            }}
        >
            {data}
        </Rnd>
    );
}

export default GreenComponent;