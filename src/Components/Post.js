import { useParams, useNavigate } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";

const Post = ({ data }) => {
  const { id } = useParams();
  console.log(id);
  console.log(data);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const foundArticle = data.find((article) => id === article.sys.id);
  //   console.log(foundArticle);
  const posts = foundArticle.fields.description;
  //   console.log(posts);
  const { location } = foundArticle.fields.location;
  return (
    <>
      {foundArticle && (
        <div>
          <h2>{foundArticle.fields.title}</h2>
          <img src={foundArticle.fields.image.fields.file.url} alt="Bild" />
          {posts.map((article, index) => (
            <Post article={article} key={index} />
          ))}
          <h4>Location</h4>
          <p>
            <Map
              height={200}
              width={280}
              defaultCenter={[location.lat, location.lon]}
              defaultZoom={8}
            >
              <Marker width={30} anchor={[location.lat, location.lon]} />
            </Map>
          </p>
          <p>{foundArticle.fields.description}</p>
          <button onClick={handleClick}>Home</button>
        </div>
      )}
    </>
  );
};

export default Post;
