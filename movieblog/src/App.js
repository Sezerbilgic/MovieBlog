import Navbar from "./components/headers/navbar";
import "./css/app.css";
import Home from "./components/Home";
import Footer from "./components/UI/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
