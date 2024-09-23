import { Card, Container, Row, Col } from "react-bootstrap";
import io from "../assets/trending/io2.jpg";
import deadpool from "../assets/trending/deadpool2.jpg";
import johnwick from "../assets/trending/johnwick.jpg";
import naruto from "../assets/trending/naruto.jpg";
import transformers from "../assets/trending/transformers.jpg";
import upin from "../assets/trending/upin.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white mt-4" id="trending">
          TRENDING MOVIES
        </h1>
        <br />
        <Row>
          <Col md={4}>
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={io}
                  alt="inside out 2 movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">Inside Out 2</Card.Title>
                <Card.Text className="movieText">
                  Joy, Sadness, Anger, Fear and Disgust have been running a
                  successful operation by all accounts. However, when Anxiety
                  shows up, they aren't sure how to feel.
                </Card.Text>
                <Card.Text className="mb-2">
                  Last updated 4 months ago
                </Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={deadpool}
                  alt="deadpool & wolverine movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">
                  Deadpool & Wolverine
                </Card.Title>
                <Card.Text className="movieText">
                  Deadpool's peaceful existence comes crashing down when the
                  Time Variance Authority recruits him to help safeguard the
                  multiverse
                </Card.Text>
                <Card.Text className="mb-2">
                  Last updated 2 months ago
                </Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={johnwick}
                  alt="inside out 2 movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">John Wick</Card.Title>
                <Card.Text className="movieText">
                  Legendary assassin John Wick (Keanu Reeves) retired from his
                  violent career after marrying the love of his life
                </Card.Text>
                <Card.Text className="mb-2">Last updated 10 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={naruto}
                  alt="inside out 2 movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">
                  Naruto the Movie
                </Card.Title>
                <Card.Text className="movieText">
                  A part of movies from Naruto.
                </Card.Text>
                <Card.Text className="mb-2">Last updated 3 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={transformers}
                  alt="inside out 2 movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">Transformers</Card.Title>
                <Card.Text className="movieText">
                  The fate of humanity is at stake when two races of robots, the
                  good Autobots and the villainous Decepticons, bring their war
                  to Earth.
                </Card.Text>
                <Card.Text className="mb-2">Last updated 5 years ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={upin}
                  alt="inside out 2 movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">Upin & Ipin</Card.Title>
                <Card.Text className="movieText">
                  The film Upin and Ipin tells the story of two twins named Upin
                  and Ipin. They are orphans who live with their older brother,
                  Kak Ros, and their grandmother, who is often called Opa.
                </Card.Text>
                <Card.Text className="mb-2">Last updated 2 years ago</Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
