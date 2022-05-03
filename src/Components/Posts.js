import { Link } from "react-router-dom";

const Posts = ({ data }) => {
  console.log(data[0].fields.image.fields.file.url);
  console.log(data);
  return (
    <>
      <h1 id="title">Lifestyle Blog</h1>
      <h2 id="subtitle">a blog about Music, Fashion and Art</h2>
      <div className="blogarticles">
        {data.map((article, index) => (
          <div className="article" key={index}>
            <h2>{article.fields.title}</h2>
            <h5>Author: {article.fields.author}</h5>

            <img
              src={article.fields.image.fields.file.url}
              alt="Bild"
              className="images"
            />
            <p>
              <Link to={article.sys.id}>
                <button class="btn ">Read more</button>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
