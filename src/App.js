import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route to="/" element={<Home></Home>}></Route>
        <Route to="/home" element={<Home></Home>}></Route>
        <Route to="/reviews" element={<Reviews></Reviews>}></Route>
        <Route to="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route to="/blog" element={<Blog></Blog>}></Route>
        <Route to="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
