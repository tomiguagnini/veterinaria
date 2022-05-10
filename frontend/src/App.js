import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element ={<Register/>}/>
        </Routes>
          
        
      </Router>
  );
}

export default App;
