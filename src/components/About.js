import React from "react";



function About(props) {
    return (
        <aside>
            <img src={props.image || "https://via.placeholder.com/215"} alt= "blog logo" />
            <p key = "aboutText">{props.about}</p>
        </aside>
    );
}

export default About;