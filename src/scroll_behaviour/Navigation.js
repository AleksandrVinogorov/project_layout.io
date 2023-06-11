import React from "react";
import ScrollTo from "./ScrollTo";

function NavBehaviour() {
    return <>
        <li className="nav-item"><ScrollTo to="home" >Home</ScrollTo></li>
        <li className="nav-item"><ScrollTo to="projects">Projects</ScrollTo></li>
        <li className="nav-item"><ScrollTo to="measurement">Measurement</ScrollTo></li>
        <li className="nav-item"><ScrollTo to="team">Team</ScrollTo></li>
        <li className="nav-item"><ScrollTo to="reviews">Reviews</ScrollTo></li>
        <li className="nav-item"><ScrollTo to="contacts">Contacts</ScrollTo></li>
        </>
}
export default NavBehaviour 