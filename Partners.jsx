import React from "react";
import p1 from "./images/p-1.png";
import p2 from "./images/p-2.png";
import p3 from "./images/p-3.png";
import p4 from "./images/p-4.png";
import p5 from "./images/p-5.png";
import p6 from "./images/p-6.png";

export default function ABC() {

    const patners = [
        {image:p1},
        {image:p2},
        {image:p3},
        {image:p4},
        {image:p5},
        {image:p6},
    ]

    return(
        <div className="pattners-info">
            {
                patners.map(p =>(
                    <div style={{width:'200px', height:'auto', objectFit:"cover"}}>
                    <img src={p.image} alt="Image" />
                </div>
                ))
            }
        
        </div>
    )
}
