import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/navbar" element={<NavBar />}></Route>
      </Routes>
    </div>
  );
};

export default App;
