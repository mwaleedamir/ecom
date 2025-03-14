import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainLanding from "./pages/MainLanding";
import FilterLanding from "./pages/FilterLanding";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLanding />} />
      <Route path="/filter" element={<FilterLanding />} />
    </Routes>
  </Router>
);

export default App;
