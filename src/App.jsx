import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainLanding from "./pages/MainLanding";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLanding />} />
      
    </Routes>
  </Router>
);

export default App;
