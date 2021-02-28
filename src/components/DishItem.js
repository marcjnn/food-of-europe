import "./DishItem.scss";
import React, { useState } from "react";

function DishItem(props) {
  const [classHidden, setClassHidden] = useState("hidden");

  // const handleMouseOver = (ev) => {
  //   console.log("mouse in", ev.target);
  //   setClassHidden("");
  // };

  // const handleMouseOut = (ev) => {
  //   console.log("mouse out", ev.target);
  //   setClassHidden("hidden");
  // };

  // formula elegante ;-)
  const handleMouse = (ev) => {
    if (ev.type === "mouseover") {
      setClassHidden("");
    } else if (ev.type === "mouseout") {
      setClassHidden("hidden");
    }
  };

  const handleClick = () => {
    props.addToFavorites(props.data);
  };

  return (
    <article className="dish">
      <img
        className="dish__photo"
        data-id={props.data.id}
        src={require(`../images/food/${props.data.photo.src}`).default}
        alt={props.data.name}
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
        onMouseOver={handleMouse}
        onMouseOut={handleMouse}
        onClick={handleClick}
      />
      <div className={`dish__origin ${classHidden}`}>
        <p className="dish__name">{props.data.name}</p>
        <img
          className="dish__flag"
          src={require(`../images/flags/flag-${props.data.code}.png`).default}
          alt={`flag of ${props.country}`}
        />
      </div>
    </article>
  );
}

export default DishItem;
