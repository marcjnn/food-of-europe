const Favorites = (props) => {
  const favorites = props.favorites.map((fav, index) => {
    return (
      <li key={index}>
        <p>{fav.name}</p>
        <p>{fav.country}</p>
      </li>
    );
  });

  return <ul>{favorites}</ul>;
};

export default Favorites;
