import "./DishList.scss";

import DishItem from "./DishItem";

function DishList(props) {
  const food = props.data.map((dish) => {
    return (
      <li key={dish.id}>
        <DishItem data={dish} />
      </li>
    );
  });
  return <ul className="dishes">{food}</ul>;
}

export default DishList;
