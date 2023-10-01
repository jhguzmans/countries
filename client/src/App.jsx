import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Views/Create/Create";
import Home from "./Views/Home/Home";
import Detail from "./Views/Detail/Detail";
import Landing from "./Views/Landing/Landing";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/home" Component={Home} />
          <Route path="/detail:id" Component={Detail} />
          <Route path="/create" Component={Create} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
