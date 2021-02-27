import "./DishCard.scss";

function DishCard(props) {
  console.log(props);
  console.log(props.data.photo);
  const data = props.data[0];
  console.log(data);
  return (
    <article className="card">
      <figure className="card__photo">
        <img
          className="card__img"
          src={require(`../images/food/${data.photo.src}`).default}
          alt={data.name}
        />
        <figcaption className="card__attribution">
          {/* necesita el update con un if para decidir si es Flickr o Wikimiedia Commons */}
          <a href={data.photo.url} target="_blank" rel="noreferrer">
            Flickr / {data.photo.author}
          </a>
        </figcaption>
      </figure>
      <h2>{data.name}</h2>
      <h3>{data.country}</h3>
      <p>{data.description}</p>
    </article>
  );
}

export default DishCard;
