import Navbar from "./components/headers/navbar";
import "./css/app.css";
import Footer from "./components/UI/footer";
import Content from "./Router/Content";

const App = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
};

export default App;
