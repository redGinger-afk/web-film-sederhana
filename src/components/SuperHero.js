import { Card, Container, Row, Col } from "react-bootstrap";
import deadpool2 from "../assets/superhero/deadpool2.jpg";
import batman from "../assets/superhero/batman.jpg";
import ironman from "../assets/superhero/iron man.jpg";
import bp from "../assets/superhero/bp.jpg";
import spiderman from "../assets/superhero/spiderman.jpg";
import thor from "../assets/superhero/thor.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white mt-4" id="superhero">
          SUPERHERO MOVIES
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={batman}
                  alt="batman movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">Batman</Card.Title>
                <Card.Text className="movieText">
                  Batman ventures into Gotham City's underworld when a sadistic
                  killer leaves behind a trail of cryptic clues.
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
                  src={deadpool2}
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
                  src={spiderman}
                  alt="spiderman movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">Spiderman</Card.Title>
                <Card.Text className="movieText">
                  "Spider-Man" centers on student Peter Parker (Tobey Maguire)
                  who, after being bitten by a genetically-altered spider, gains
                  superhuman strength and the spider-like ability to cling to
                  any surface.
                </Card.Text>
                <Card.Text className="mb-2">
                  Last updated 10 years ago
                </Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={bp}
                  alt="black panther movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">Black Panther</Card.Title>
                <Card.Text className="movieText">
                  In Black Panther, T'Challa is crowned king of Wakanda
                  following his father's death, but he is challenged by
                  Killmonger (Jordan), who plans to abandon the country's
                  isolationist policies and begin a global revolution.
                </Card.Text>
                <Card.Text className="mb-2">Last updated 3 years ago</Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img
                  src={ironman}
                  alt="Iron Man movies"
                  className="movieImage"
                />
                <Card.Title className="text-center">Iron Man</Card.Title>
                <Card.Text className="movieText">
                  A billionaire industrialist and genius inventor, Tony Stark
                  (Robert Downey Jr.), is conducting weapons tests overseas, but
                  terrorists kidnap him to force him to build a devastating
                  weapon.
                </Card.Text>
                <Card.Text className="mb-2">
                  Last updated 14 years ago
                </Card.Text>
              </Card>
            </div>
          </Col>
          <Col md={4} className="movieWrapper">
            <div>
              <Card className="bg-dark movieImage text-light  m-4">
                <Card.Img src={thor} alt="thor movies" className="movieImage" />
                <Card.Title className="text-center">Thor</Card.Title>
                <Card.Text className="movieText">
                  As the son of Odin (Anthony Hopkins), king of the Norse gods,
                  Thor (Chris Hemsworth) will soon inherit the throne of Asgard
                  from his aging father.
                </Card.Text>
                <Card.Text className="mb-2">Last updated 20 mins ago</Card.Text>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
