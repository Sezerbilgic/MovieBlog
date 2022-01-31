import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./redux/actions/actions";

function App() {
  const movies = useSelector((state) => state);
  const [sending, setSending] = useState(false);
  const dispatch = useDispatch();
  let send = 0;
  useEffect(() => {
    if (send === 0) {
      dispatch(getMovies({ key: "movie/popular" }));
    }
  }, send);

  return (
    <div className="App"> {/* <p onClick={handleClick()}>Yazı</p> */}</div>
  );
}

export default App;
