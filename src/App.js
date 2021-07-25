import Header from "./components/Header";
import Signup from "./components/Signup";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faGlobe);

function App() {
  return (
    <div className="container">
      <Header />
      <Signup />
    </div>
  );
}

export default App;
