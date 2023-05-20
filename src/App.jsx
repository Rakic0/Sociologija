import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
