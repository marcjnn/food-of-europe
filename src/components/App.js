import "./App.scss";
import data from "../store";

import DishList from "./DishList";
// import DishCard from "./DishCard";
import Favorites from "./Favorites";
import React, { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (nv) => {
    setFavorites([...favorites, nv]);
  };

  return (
    <main>
      <Favorites favorites={favorites} />
      <DishList data={data} addToFavorites={addToFavorites} />
      {/* <DishCard data={data} /> */}
    </main>
  );
}

export default App;
