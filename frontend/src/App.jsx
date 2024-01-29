import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import ToDo from "./Pages/ToDo";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo/:guid" element = {<ToDo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
