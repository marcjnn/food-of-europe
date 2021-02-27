import "./DishItem.scss";

function DishItem(props) {
  console.log(props);
  return (
    <article className="dish">
      <img
        className="dish__photo"
        src={require(`../images/food/${props.data.photo.src}`).default}
        alt={props.data.name}
      />
      <div className="dish__origin">
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

// src={require(`../images/food/${dish.photo.src}`).default}
// name={dish.name}
// country={dish.country}
