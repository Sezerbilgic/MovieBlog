import Navbar from "./components/headers/navbar";
import "./css/app.css";
import Footer from "./components/UI/footer";
import Content from "./Router/Content";

const HomeCall = require("./components/Home/index").default;
const router = [
  {
    path: "/home",
    component: require("./components/Home/index").default,
    name: "home",
  },
  {
    path: "/detail",
    component: require("./components/Movie/Detail").default,
    name: "detail",
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <HomeCall />
      <Footer />
    </>
  );
};

export default App;
