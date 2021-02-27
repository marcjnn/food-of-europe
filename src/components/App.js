import "./App.scss";
import data from "../store";

import DishList from "./DishList";
import DishCard from "./DishCard";

function App() {
  return (
    <main>
      {/* <DishList data={data} /> */}
      <DishCard data={data} />
    </main>
  );
}

export default App;
