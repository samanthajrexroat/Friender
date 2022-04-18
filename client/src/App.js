import Home from "./pages/Home";
import Nav from "./components/Navbar/Nav";
import LogIn from "./components/Modal/LogIn";
import SignUp from "./components/Modal/SignUp";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
