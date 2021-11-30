import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Announcement />
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<ProductList/>} />
        <Route path="/contacto" element={<noindex/>} />
      </Routes>          
      <Footer/>
    </Router>
  );
};

export default App;