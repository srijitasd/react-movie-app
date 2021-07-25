import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import LandingPage from "./components/LandingPage";

library.add(faGlobe);

function App() {
  return (
    <div className="container">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
