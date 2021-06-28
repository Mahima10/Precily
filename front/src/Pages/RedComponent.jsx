import React from "react";
import { Rnd } from "react-rnd";
const { innerWidth: width, innerHeight: height } = window;

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 5px red",
    background: "#f0f0f0"
};

function RedComponent({data}) {
    console.log("data:RedComponent::data::", data)
    return (
        <Rnd
            style={style}
            default={{
                x: 0,
                y: 0,
                width: (33/100) * width,
                height: 5/10 * height
            }}
        >
            {data}
        </Rnd>
    );
}

export default RedComponent;