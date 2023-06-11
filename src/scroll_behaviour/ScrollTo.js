import { Link } from "react-scroll";
import React from "react";
function ScrollTo(props) {
  return (
    <Link
      to={props.to}
      smooth={true}
      duration={1000}
      offset={-50} // Задает смещение при скроллинге вниз
    >
      {props.children}
    </Link> 
  );
}

export default ScrollTo;