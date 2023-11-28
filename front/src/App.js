import Login from "./components/Login";
import Map from "./components/Map";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register"
function App() {
  return (


    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Login />} />
            <Route path = "/register" element = {<Register />} />
            <Route path = "/map" element = {<Map />} />
          </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
