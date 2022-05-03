import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Posts = ({ data }) => {
  //   console.log(data[0].fields.image.fields.file.url);
  console.log(data);
  return (
    <>
      <h1 id="title">Lifestyle Blog</h1>
      <h2 id="subtitle">a blog about Music, Fashion and Art</h2>
      <div className="blogarticles">
        {data.map((article, index) => (
          <div className="article" key={index}>
            {/* <h2>{article.fields.title}</h2>
            <h5>Author: {article.fields.author}</h5>

            <img
              src={article.fields.image.fields.file.url}
              alt="Bild"
              className="images"
            />
            <>{article.fields.shortDescription}</>
            <p>
              <Link to={article.sys.id}>
                <button className="btn btn-primary" variant="primary">
                  Read more
                </button>
              </Link>
            </p> */}

            <Card style={{ width: "18rem" }}>
              <Card.Img
                className="images"
                variant="top"
                src={article.fields.image.fields.file.url}
              />
              <Card.Body>
                <Card.Title id="title">{article.fields.title}</Card.Title>
                <Card.Text>Author: {article.fields.author}</Card.Text>
                <Card.Text>{article.fields.shortDescription}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
