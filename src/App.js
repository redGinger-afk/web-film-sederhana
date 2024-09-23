import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Superhero from "./components/SuperHero";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}
      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End of Trending Section */}

      <div className="superhero">
        <Superhero />
      </div>
    </div>
  );
}

export default App;
