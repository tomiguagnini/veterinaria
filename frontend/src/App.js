import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Routes/Login";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />

        </Routes>
          
        
      </Router>
  );
}

export default App;
