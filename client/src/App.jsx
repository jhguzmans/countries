import "./App.css";
import { Route, Routes } from "react-router-dom";
import Activities from "./Views/Activities/Activities";
import Home from "./Views/Home/Home";
import Detail from "./Views/Detail/Detail";
import Landing from "./Views/Landing/Landing";
import NavBar from "./Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

export default App;
