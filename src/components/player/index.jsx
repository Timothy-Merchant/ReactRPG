import React from "react";
import Actor from "../actor";


export default function Player({ skin }) {

    const data = {
        h: 32,
        w: 32,
    };

    return <Actor sprite={`/${skin}.png`} data={data} />

}