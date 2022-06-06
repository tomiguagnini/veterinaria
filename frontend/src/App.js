import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Dashboard from "./Routes/Dashboard";
import Register from "./Routes/Register";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element ={<Register/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
          
        
      </Router>
  );
}

export default App;
